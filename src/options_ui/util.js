import escapeRegexp from 'lodash-es/escapeRegexp';

const httpRegexp = /.*:\/\//;
const wwwRegexp = /(.*\.)?/;
const tailRegexp = /.*/;

const makeWebsiteRegexp = url => {
  return new RegExp(
    httpRegexp.source + wwwRegexp.source + escapeRegexp(url) + tailRegexp.source
  );
};

export const fetchUserOptions = () => {
  return [
    {
      name: 'Github',
      pattern: makeWebsiteRegexp('github.com'),
    },
    {
      name: 'Stack Overflow',
      pattern: makeWebsiteRegexp('stackoverflow.com'),
    },
    {
      name: 'NPM',
      pattern: makeWebsiteRegexp('npmjs.org'),
    },
    {
      name: 'Medium',
      pattern: makeWebsiteRegexp('medium.com'),
    },
    {
      name: 'Read the Docs',
      pattern: makeWebsiteRegexp('readthedocs.io'),
    },
  ];
};
