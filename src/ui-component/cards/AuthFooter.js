import React from 'react';

// material-ui
import { Link, Typography, Stack } from '@material-ui/core';

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
    return (
        <Stack direction="row" Content="center">
            <Typography variant="subtitle2" component={Link} href="https://berrydashboard.io" target="_blank" underline="hover">
                Virtual Expo powered by &copy; bigmediahouse
            </Typography>
            <Typography variant="subtitle2" component={Link} href="https://codedthemes.com" target="_blank" underline="hover">
                
            </Typography>
        </Stack>
    );
};

export default AuthFooter;
