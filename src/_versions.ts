export interface TsAppVersion {
  version: string;
  name: string;
  description?: string;
  versionLong?: string;
  versionDate: string;
  gitCommitHash?: string;
  gitCommitDate?: string;
  gitTag?: string;
}
export const versions: TsAppVersion = {
  version: '0.0.2',
  name: 'ionic-react-kit',
  versionDate: '2024-04-27T21:53:55.564Z',
  description: 'An Ionic React Starter Kit bundled with care.',
  gitCommitHash: '512ecb4',
  versionLong: '0.0.2-512ecb4',
};
export default versions;
