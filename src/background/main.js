import escapeRegexp from 'lodash-es/escapeRegexp';

const httpRegexp = /.*:\/\//;
const wwwRegexp = /(.*\.)?/;
const tailRegexp = /.*/;

const makeWebsiteRegexp = url => {
  return new RegExp(
    httpRegexp.source + wwwRegexp.source + escapeRegexp(url) + tailRegexp.source
  );
};

const patterns = [
  {
    pattern: makeWebsiteRegexp('github.com'),
    codeBlockSelector: 'div.highlight',
  },
  {
    pattern: makeWebsiteRegexp('stackoverflow.com'),
  },
];

const onCompleted = (details) => {
	if (patterns.some((pattern) => details.url.includes(pattern))) {
		console.log('matched:', details.url);
	}
};

browser.webNavigation.onCompleted.addListener(onCompleted);
