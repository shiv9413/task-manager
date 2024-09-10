import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function ClientList({ clients }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="my-4">Registered Client</h1>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Enquiry</th>
                                <th>Notes</th>
                                <th>Registration Date</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>{client.address}</td>
                                    <td>{client.enquiry}</td>
                                    <td>{client.notes}</td>
                                    <td>{client.created_at}</td>
                                    {/* <td>
                                        <button className="btn btn-primary btn-sm mr-2">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
