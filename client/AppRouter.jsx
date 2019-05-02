import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import TodoList from './components/TodoList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={TodoList} />
        </BrowserRouter>
    );
};

AppRouter.propTypes = {};

export default AppRouter;
