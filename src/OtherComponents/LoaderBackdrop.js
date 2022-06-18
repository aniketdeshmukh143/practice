import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoaderBackdrop(props) {
    const userState = useSelector((state) => state.userData)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(userState !== undefined && userState !== null){
            setOpen(userState.loading);
        }
    }, [userState])

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
