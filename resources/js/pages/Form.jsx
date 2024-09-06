import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
        clientReference: '',
        workInquiry: '',
        lmia: '',
        pr: '',
        pgwp: '',
        coop: '',
        visaSticker: '',
        visitorVisa: '',
        spousalWp: '',
        lmiaApplication: '',
        studyPermit: '',
        studyPermitExtension: '',
        admissionLetter: '',
    });

    const [clientType, setClientType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClientTypeChange = (e) => {
        setClientType(e.target.value);
    };

    const testSwal = () => {
        Swal.fire({
            title: 'Test Alert!',
            text: 'This is a test alert.',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    };
    //testSwal();

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/store', formData, {
            onSuccess: (response) => {
                Swal.fire({
                    title: 'Success!',
                    text: response.props.message || 'Client information saved successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.location.reload();
                });
            },
            onError: (errors) => {
                Swal.fire({
                    title: 'Error!',
                    text: errors.response.data.message || 'There was an error saving the client information.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    };

    return (
        <div className="container mt-4">
            <h1>Client Registration Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Client Type Dropdown */}
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="mb-3">
                            <label htmlFor="clientType" className="form-label">Client Type</label>
                            <select
                                id="clientType"
                                name="clientType"
                                className="form-select"
                                value={clientType}
                                onChange={handleClientTypeChange}
                            >
                                {/* <option value="">Select Client Type</option> */}
                                <option value="new">New Client</option>
                                <option value="existing">Existing Client</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* {clientType === 'new' && ( */}
                <div className="row">
                    {/* First Name */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            placeholder="Enter first name" 
                            required 
                        />
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            placeholder="Enter last name" 
                            required 
                        />
                    </div>
                
                    {/* Email */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter email" 
                            required 
                        />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="Enter phone number" 
                            required 
                        />
                    </div>
               

              
                    {/* Address */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            placeholder="Enter address" 
                        />
                    </div>

                    {/* Notes */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="notes" className="form-label">Notes</label>
                        <textarea 
                            className="form-control" 
                            id="notes" 
                            name="notes" 
                            value={formData.notes} 
                            onChange={handleChange} 
                            rows="3" 
                            placeholder="Additional notes"
                        />
                    </div>
               
                    {/* Client Reference */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="clientReference" className="form-label">Client Reference</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="clientReference" 
                            name="clientReference" 
                            value={formData.clientReference} 
                            onChange={handleChange} 
                            placeholder="Enter client reference" 
                        />
                    </div>

                    {/* Work Inquiry */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="workInquiry" className="form-label">Work Inquiry</label>
                        <textarea 
                            className="form-control" 
                            id="workInquiry" 
                            name="workInquiry" 
                            value={formData.workInquiry} 
                            onChange={handleChange} 
                            rows="3" 
                            placeholder="Describe the work inquiry"
                        />
                    </div>
                </div>    
                {/* )} */}
                
                {/* Individual Input Boxes for Inquiry Status */}
                {clientType === 'existing' && (
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lmia" className="form-label">LMIA</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lmia" 
                            name="lmia" 
                            value={formData.lmia} 
                            onChange={handleChange} 
                            placeholder="Enter LMIA status" 
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="pr" className="form-label">PR</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="pr" 
                            name="pr" 
                            value={formData.pr} 
                            onChange={handleChange} 
                            placeholder="Enter PR status" 
                        />
                    </div>
               
                    <div className="col-md-6 mb-3">
                        <label htmlFor="pgwp" className="form-label">PGWP Work Permit</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="pgwp" 
                            name="pgwp" 
                            value={formData.pgwp} 
                            onChange={handleChange} 
                            placeholder="Enter PGWP Work Permit status" 
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="coop" className="form-label">Co-op</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="coop" 
                            name="coop" 
                            value={formData.coop} 
                            onChange={handleChange} 
                            placeholder="Enter Co-op status" 
                        />
                    </div>
                
                    <div className="col-md-6 mb-3">
                        <label htmlFor="visaSticker" className="form-label">Visa Sticker</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="visaSticker" 
                            name="visaSticker" 
                            value={formData.visaSticker} 
                            onChange={handleChange} 
                            placeholder="Enter Visa Sticker status" 
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="visitorVisa" className="form-label">Visitor Visa</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="visitorVisa" 
                            name="visitorVisa" 
                            value={formData.visitorVisa} 
                            onChange={handleChange} 
                            placeholder="Enter Visitor Visa status" 
                        />
                    </div>
               
                    {/* Spousal Work Permit */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="spousalWp" className="form-label">Spousal Work Permit</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="spousalWp" 
                            name="spousalWp" 
                            value={formData.spousalWp} 
                            onChange={handleChange} 
                            placeholder="Enter Spousal Work Permit status" 
                        />
                    </div>

                    {/* LMIA Application */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lmiaApplication" className="form-label">LMIA Application</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lmiaApplication" 
                            name="lmiaApplication" 
                            value={formData.lmiaApplication} 
                            onChange={handleChange} 
                            placeholder="Enter LMIA Application status" 
                        />
                    </div>
               
                    {/* Study Permit */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="studyPermit" className="form-label">Study Permit</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="studyPermit" 
                            name="studyPermit" 
                            value={formData.studyPermit} 
                            onChange={handleChange} 
                            placeholder="Enter Study Permit status" 
                        />
                    </div>

                    {/* Study Permit Extension */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="studyPermitExtension" className="form-label">Study Permit Extension</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="studyPermitExtension" 
                            name="studyPermitExtension" 
                            value={formData.studyPermitExtension} 
                            onChange={handleChange} 
                            placeholder="Enter Study Permit Extension status" 
                        />
                    </div>
               
                    {/* Admission Letter */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="admissionLetter" className="form-label">Admission Letter</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="admissionLetter" 
                            name="admissionLetter" 
                            value={formData.admissionLetter} 
                            onChange={handleChange} 
                            placeholder="Enter Admission Letter status" 
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lmiaWP" className="form-label">LMIA WP</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lmiaWP" 
                            name="lmiaWP" 
                            value={formData.lmiaWP} 
                            onChange={handleChange} 
                            placeholder="Enter LMIA WP" 
                        />
                    </div>
                </div>
                )}
                {/* Submit Button */}
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
