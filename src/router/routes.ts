import React from 'react';

interface IRouteBase {
  path: string;
  component: any;
  redirect?: string; // 302跳转
  requireAuth?: boolean;
  meta?: IRouteMeta;
  exact?: boolean;
  strict?: boolean;
}

interface IRouteMeta {
  title: string;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[]
}

export const routes: IRoute[] = [
  {
    path: '/',
    component: React.lazy(() => import('views/dashboard/index'))
  }
];
