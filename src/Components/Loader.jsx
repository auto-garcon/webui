import React, {useEffect, useState} from 'react';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';


export  default function Loader(props) {
    const {loading, completed} = props; // Are we loading currently?
    return(
        <>
            {loading ? (
                <Fade
                    in={loading}
                    style={{
                        transitionDelay: loading ? '800ms' : '0ms',
                    }}
                    unmountOnExit
                >
                    <LinearProgress variant="determinate" value={completed} color="primary" />
                </Fade>

            ) : (
                <div/>
            )}
        </>
    )
}
