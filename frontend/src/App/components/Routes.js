import React, {lazy, Suspense} from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

export const Routes = () => (
    <Suspense fallback={<div className='route-loading'><h1>Loading...</h1></div>}>
        <Switch>
        </Switch>
    </Suspense>
);

