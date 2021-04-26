import React from 'react'
import { Link } from 'react-router-dom'
import './CompanyDetails.css'

function CompanyDetails() {
    return (
        <div>
            <div className='Add-Company'>
                <div className='Add-Company-name-box'>
                    <p>Add Company</p>
                </div>
            </div>

            <div className='Add-Company-body'>
                <div className='box'>

                    <div className='Company-Details-Name-box'>
                        <p>Company Details</p>
                    </div>

                    <div className='form-box'>
                        <form className='Forms-zone'>
                            <div className='left-forms-box'>
                                <div className='left-forms'>

                                    <div className='Name-of-the-Company common-class'>
                                        <label className='all-labels'>Name of the Company</label>
                                        <input type='text'/>
                                    </div>

                                    <div className='Name common-class'>
                                        <label className='all-labels'>Name</label>
                                        <input type='text'/>
                                    </div>

                                    <div className='Designation common-class'>
                                        <label className='all-labels'>Designation</label>
                                        <input type='text'/>
                                    </div>

                                    <div className='Contact-No common-class'>
                                        <label className='all-labels'>Contact No.</label>
                                        <input type='number'/>
                                    </div>

                                    <div className='GST-No common-class'>
                                        <label className='all-labels'>GST No.</label>
                                        <input type='number'/>
                                    </div>

                                    <div className='Business-Category common-class'>
                                        <label className='all-labels'>Business Category</label>
                                        <select >
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className='Business-Sector common-class'>
                                        <label className='all-labels'>Business Sector</label>
                                        <select >
                                            <option>Select</option>
                                        </select>
                                    </div>

                                    <div className='Website common-class'>
                                        <label className='all-labels'>Website</label>
                                        <input type='text'/>
                                    </div>
                                </div>

                            </div>

                            <div className='vertical-line'></div>

                            <div className='right-forms'>

                                <div className='Address common-class'>
                                    <label className='all-labels'>Address</label>
                                    <input type='text'/>
                                </div>

                                <div className='Area common-class'>
                                    <label className='all-labels'>Area</label>
                                    <input type='text'/>
                                </div>

                                <div className='City common-class'>
                                    <label className='all-labels'>City</label>
                                    <select >
                                        <option>Select</option>
                                    </select>
                                </div>

                                <div className='State common-class'>
                                    <label className='all-labels'>State</label>
                                    <select >
                                        <option>Select</option>
                                    </select>
                                </div>

                                <div className='Pincode common-class'>
                                    <label className='all-labels'>Pincode</label>
                                    <input type='number'/>
                                </div>

                                <div className='No-of-Employees common-class'>
                                    <label className='all-labels'>No. of Employees</label>
                                    <input type='number'/>
                                </div>

                                <div className='No-of-HK common-class'>
                                    <label className='all-labels'>No. of HK</label>
                                    <input type='number'/>
                                </div>

                                <div className='No-of-Supervisors common-class'>
                                    <label className='all-labels'>No. of Supervisors</label>
                                    <input type='number'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='button-box'>
                <Link to='/WasteManagementDetails' className='link'><button className='button'>Next</button></Link>
            </div>
        </div>
    )
}

export default CompanyDetails
