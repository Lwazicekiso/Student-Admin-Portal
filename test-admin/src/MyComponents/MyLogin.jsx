import React from 'react';
import {Link} from 'react-router-dom'

import '../Styling/MyLogin.css';




const MyLogin = () => {

    return(
        <div className="my-login-page">
        <div className="role-symbol-container">
            <div style={{ textAlign: 'center' }}>
                <Link to="/admin">
                    <img src="src/images/admin_symbol.jpg" alt="admin" className="bouncing-image" />
                </Link>
                <p>Admin</p>
            </div>

           

            <div style={{ textAlign: 'center' }}>
                <Link to="/staff">
                    <img src="src/images/staff_symbol.jpg" alt="admin"  className="bouncing-image" />
                </Link>
                <p>Staff</p>
            </div>
  
            <div style={{ textAlign: 'center' }}>
                <Link to="/student">
                    <img src="src/images/student_symbol.jpg" alt="admin"  className="bouncing-image" />
                </Link>
                <p>Student</p>
            </div>

             {/* Applicant Section */}
             <div className="applicant-container" style={{ textAlign: 'center' }}>
                <Link to="/applicant">
                    <img src="src/images/student_symbol.jpg" alt="applicant" className="bouncing-image" />
                </Link>
                <p>Applicant</p>
            </div>

{/*naming*/}
           <div className="C">C</div>
            <div className="ape">ape</div> 
            <div className="C_2">C</div>
            <div className="ollege">ollege</div>
            
        </div>
        </div>
    );
};

export default MyLogin;

