const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(101,220,151)',
              '@link-color': 'rgb(101,220,151)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
