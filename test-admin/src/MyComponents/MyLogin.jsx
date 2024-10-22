import React from 'react';
import {Link} from 'react-router-dom'

import '../Styling/MyLogin.css';

const MyLogin = () => {

    return(
        <div className="role-symbol-container">
            <div style={{ textAlign: 'center' }}>
                <Link to="/admin">
                    <img src="src/images/admin_symbol.jpg" alt="admin" className="image" />
                </Link>
                <p>Admin</p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link to="/staff">
                    <img src="src/images/staff_symbol.jpg" alt="admin" className="image" />
                </Link>
                <p>Staff</p>
            </div>
  
            <div style={{ textAlign: 'center' }}>
                <Link to="/student">
                    <img src="src/images/student_symbol.jpg" alt="admin" className="image" />
                </Link>
                <p>Student</p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link to="/applicant">
                    <img src="src/images/student_symbol.jpg" alt="admin" className="image" />
                </Link>
                <p>Applicant</p>
            </div>

        </div>
    );
};

export default MyLogin;