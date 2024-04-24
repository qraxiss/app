import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from 'layout'

//routes
import { authProtectedRoutes, publicRoutes } from './allRoutes'
import NonAuthLayout from '../layout/NonAuthLayout'

const Index = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {authProtectedRoutes.map((route, idx) => (
                            <Route path={route.path} element={<Layout isLight={route.isLight}>{route.component}</Layout>} key={idx} />
                        ))}
                    </Route>

                    <Route>
                        {publicRoutes.map((route, idx) => (
                            <Route path={route.path} element={<NonAuthLayout>{route.component}</NonAuthLayout>} key={idx} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Index
