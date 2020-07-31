import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(77, 46, 5, 0.61)',
        zIndex: 1
    },
    spinnerContainer: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function Spinner() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.spinnerContainer}>
                <CircularProgress color="secondary" size={70} thickness={4} />
            </div>
        </div>
    );
}