module.export = {
	extends: ['eslint:recommended'],
	parserOptions: {
		emcaVersion: 6
	},
  env: {
	  browser: true,
	  es6: true,
    webextensions: true,
  },
};
