import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	outDir: '../public/docs',
	build: {
		// Example: Generate `page.html` instead of `page/index.html` during build.
		format: 'file'
	},
	integrations: [
		starlight({
			title: 'Ionic React Starter Kit',
			social: {
				github: 'https://github.com/rgilsimoes/IonicReactKit',
				twitter: 'https://www.twitter.com/rykhard'
			},
			sidebar: [
				{
					label: 'Starter Kit',
					autogenerate: { directory: 'guide' },
				},
			],
		}),
	],
});
