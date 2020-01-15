import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
import './Customer.css';

const Customer = ({ customer }) => {
    return (
        <TableRow>
            <TableCell>{customer.id}</TableCell>
            <TableCell><img className="profile" src={`http://localhost:5000${customer.image}`} /></TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.birthday}</TableCell>
            <TableCell>{customer.gender}</TableCell>
            <TableCell>{customer.job}</TableCell>
            <TableCell><CustomerDelete id={customer.id} /></TableCell>
        </TableRow>
    )
}

export default Customer
