import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4';

export default function ClientList({ clients }) {
    useEffect(() => {
        // Initialize DataTables
        //$('#clientTable').DataTable();
        $('#clientTable').DataTable({
            responsive: true
        });

        // Clean up the DataTable on component unmount
        return () => {
            $('#clientTable').DataTable().destroy();
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="my-4">Registered Client</h1>
                    <table id="clientTable" className="table table-bordered table-striped dt-responsive nowrap">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Enquiry</th>
                                <th>Notes</th>
                                <th>Registration Date</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
