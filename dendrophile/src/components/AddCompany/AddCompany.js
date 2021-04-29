import React from 'react';
import "./AddCompany.css";

function AddCompany() {
    return (
        <div className="addCompany">
            <div>
                <h1>Add Company</h1>
                <hr />
            </div>   

            <form>
                <div className="addcompany__form">
                    <h4>Company Details</h4>    

                    <table>
                        <tbody className="addcompanyform__first">
                            <tr>
                                <td>Name of the company</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Name</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Designation</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Contact No.</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>GST No.</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Business Category</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Business Sector</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Website</td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>

                        <tbody>
                        <tr>
                                <td>Address</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Area</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>City</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>State</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Pincode</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>No. of Employees</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>No. of HK</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>No. of Supervisors</td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 

                <div className="addcompany__form--btn">
                    <input type="submit" value="Next" />
                </div>
            </form>       
        </div>
    )
}

export default AddCompany;