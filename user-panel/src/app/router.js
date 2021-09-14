import React from 'react';
import HomePage from './HomePage'
import {
    BrowserRouter,
    Route,
} from "react-router-dom";

const router = () => {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Route exact path="/" component={HomePage} />
        </BrowserRouter>

    )
}

export default router;
