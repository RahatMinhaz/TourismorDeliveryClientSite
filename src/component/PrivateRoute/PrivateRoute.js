import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Redirect, Route } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    const {user, loading} = useAuth();
    if (loading) return  <Spinner className="mt-3" animation="border" variant="success" />;
    return (
        <Route
            {...rest}
            render = {({location}) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from:location}
                }}
                ></Redirect>}
                >
        </Route>
    );
};

export default PrivateRoute;