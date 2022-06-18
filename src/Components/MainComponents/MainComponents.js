import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/AsyncApi/AsyncAPI';
import FormDialogComponent from '../FormDialogComponent/FormDialogComponent'
import TableComponent from '../TableComponent/TableComponent'

export default function MainComponents() {
  const childStateOpenDialogForEdit = useRef(null);
  const dispatch = useDispatch()

  const openDialogBoxForEdit = (type, editRowObj) => {
    childStateOpenDialogForEdit.current.callOpenDialogFunction(type, editRowObj);
  }

  const deleteRowFromState = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div style={{padding:"10px"}}>
      <FormDialogComponent
        ref={childStateOpenDialogForEdit}
      />
      <br></br>
      <TableComponent
        openDialogBoxForEdit={openDialogBoxForEdit}
        deleteRowFromState={deleteRowFromState}
      />
    </div>
  )
}
