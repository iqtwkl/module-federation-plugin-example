const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe3',

  exposes: {
    './Module': './projects/mfe3/src/app/bus/bus.module.ts',
    './BusSearchComponent': './projects/mfe3/src/app/bus/bus-search/bus-search.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
