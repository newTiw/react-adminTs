// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/tiw/Documents/OpenSource/react-adminTs/node_modules/_@umijs_runtime@3.2.19@@umijs/runtime';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/layouts/UserLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__loginRegistered__login' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/pages/loginRegistered/login'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/layouts/SecurityLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "redirect": "/table",
            "exact": true
          },
          {
            "path": "/table",
            "name": "表格",
            "icon": "table",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/pages/TableList'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tiw/Documents/OpenSource/react-adminTs/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
