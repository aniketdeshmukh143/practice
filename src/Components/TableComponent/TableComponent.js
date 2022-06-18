import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './TableComponent.css'
import SkeletonTable from '../../OtherComponents/SkeletonTable';
import { range } from '../../CommonFunctions/CommonFunction';

export default function TableComponent(props) {
    const userState = useSelector((state) => state.userData)

    return (
        <table>
            <thead>
                <tr>
                    <th>Profile Image</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>Pin Code</th>
                    <th>Action</th>
                </tr>
            </thead>
            {userState && userState.data.length === 0
                ? <tbody>
                    <tr>
                        {
                            range(0, 8).map((value, index) => (
                                <td key={value+index}>
                                    <SkeletonTable />
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
                : <tbody>
                    {
                        userState && userState.data.length > 0 && userState.data.map((value, index) => (
                            <tr>
                                <td>
                                    <img src={value.hasOwnProperty("avatar") ? value.avatar : ""} alt={value.first_name ? value.first_name : value.firstname} width={"50px"} height={"50px"} style={{ borderRadius: "50%" }} />
                                </td>
                                <td>{value.hasOwnProperty("username") ? value.username : ""}</td>
                                <td>{value.first_name ? value.first_name : value.firstname}</td>
                                <td>{value.last_name ? value.last_name : value.lastname}</td>
                                <td>{value.email}</td>
                                <td>{value.hasOwnProperty("address") ? value.address : ""}</td>
                                <td>{value.hasOwnProperty("phonenumber") ? value.phonenumber : ""}</td>
                                <td>{value.hasOwnProperty("pincode") ? value.pincode : ""}</td>
                                <td>
                                    <div className='actionButtonColCss'>
                                        <IconButton aria-label="edit" onClick={(e) => props.openDialogBoxForEdit("update", value)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={(e) => props.deleteRowFromState(value.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            }


        </table>
    )
}
