import { Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from '../../../../shared/config/route-config/route-config';
import { Sidebar } from '../../../../widgets/sidebar';


export function AppRouter() {
    const RenderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense >
                <div className='content-wrapper'>
                   <Sidebar />
                   <div className="page-wrapper">{route.element}</div>
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                element={element}
                path={route.path}
            />
        );
    }, []);

    return (
        <Suspense >
            <Routes>
                {Object.values(routeConfig).map(RenderWithWrapper)}
            </Routes>
        </Suspense>
    );
}
