/* eslint-disable no-console */
import _ from 'underscore';

/**
 * Log levels
 * OFF = no logging
 * LOG = log + warn + error
 * WARN = warn + error
 * ERROR = error
 */
const LOG_LEVELS = {
  OFF: 'OFF',
  DEBUG: 'DEBUG',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;

type LogLevel = (typeof LOG_LEVELS)[keyof typeof LOG_LEVELS];

/** The default logging level */
const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL as LogLevel;

/** Signature of a logging function */
interface LogFn {
  (message?: unknown, ...optionalParams: unknown[]): void;
}

/** Basic logger interface */
interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

/** Logger which outputs to the browser console */
export class ConsoleLogger implements Logger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor(options: { level: LogLevel }) {
    console.warn('Logging level: ' + options.level);
    const { level } = options || {};

    if (level === LOG_LEVELS.OFF) {
      this.log = _.noop;
      this.warn = _.noop;
      this.error = _.noop;

      return;
    }

    this.error = console.error.bind(console);

    if (level === LOG_LEVELS.ERROR) {
      this.warn = _.noop;
      this.log = _.noop;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level === LOG_LEVELS.WARN) {
      this.log = _.noop;

      return;
    }

    this.log = console.log.bind(console);
  }
}

export const logger = new ConsoleLogger({ level: LOG_LEVEL });
