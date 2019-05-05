import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    );
};

AppRouter.propTypes = {};

export default AppRouter;
