import React, {useState, useImperativeHandle, useRef, forwardRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FormComponent from '../FormComponent/FormComponent';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const FormDialogComponent = (props, ref) => {
    const childStateFormComponentRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState("");


    useImperativeHandle(ref, () => ({
        callOpenDialogFunction: (type, editRowObj) => {
            childStateFormComponentRef.current.callAllStateForEditFunction(editRowObj)
            handleClickOpen(type);
        }
    }))

    const handleClickOpen = (type) => {
        if(type === "update"){
            setModalType("Update");
        }else{
            setModalType("Create");
        }
        setOpen(true);
    };

    const handleClose = () => {
        childStateFormComponentRef.current.callResetAllStateFunction();
        setOpen(false);
    };

    const handleCreateUpdateUser = (type) => {
        childStateFormComponentRef.current.callSubmitFunction(type);
    }

    const modalTypeState = modalType
    return (
        <div>
            <Button variant="outlined" onClick={(e)=>handleClickOpen("Create")}>
                Create User
            </Button>
            <Dialog
                fullWidth
                maxWidth={"md"}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
                            {modalTypeState + " User"}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <FormComponent
                        ref={childStateFormComponentRef}
                        handleClose={handleClose}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {
                        modalTypeState === "Update"
                        ?<Button onClick={(e) => handleCreateUpdateUser("update")}>{modalTypeState}</Button>
                        :<Button onClick={(e) => handleCreateUpdateUser("create")}>Create</Button>
                    }
                    
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default forwardRef(FormDialogComponent)

