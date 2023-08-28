import { RouteProps } from 'react-router-dom';

import { BookPage } from '../../../pages/book';
import { MainPage } from '../../../pages/main';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  BOOK = 'book',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BOOK]: '/book',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.BOOK]: {
        path: RoutePath.book,
        element: <BookPage />,
    },
};
