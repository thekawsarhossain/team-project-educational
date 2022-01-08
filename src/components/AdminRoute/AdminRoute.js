import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';

import useAuth from '../../hooks/useAuth'
import spinner from '../../images/ZhKG.gif';


const AdminRoute = ({ children, ...rest }) => {
    let { user, admin } = useAuth();

    if (!admin) {
        return <Box style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default AdminRoute;