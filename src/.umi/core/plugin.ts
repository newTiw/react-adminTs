// @ts-nocheck
import { Plugin } from '/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/node_modules/_@umijs_runtime@3.2.10@@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/node_modules/_umi-plugin-antd-icon-config@2.0.3@umi-plugin-antd-icon-config/lib/app.js'),
  path: '/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/node_modules/_umi-plugin-antd-icon-config@2.0.3@umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/tiw/Documents/work/JIAi/code/bank/interests_exchange_admin/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
