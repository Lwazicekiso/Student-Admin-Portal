import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/MyLogin.css';

const MyLogin = () => {
    return (
        <div className="login-container">
            {/* Left Section: Login Options */}
            <div className="login-panel">
                <h2>Sign in to <span className="brand-name">Helimlick</span></h2>
                
                <Link to="/Applicant" className="login-option">
                    <span className="icon">📄</span> Applicant
                </Link>

                <Link to="/student" className="login-option">
                    <span className="icon">🎓</span> Student
                </Link>

                <Link to="/admin" className="login-option">
                    <span className="icon">⚙️</span> Administrator
                </Link>
                <Link to="/Lecturer" className="login-option">
                    <span className="icon">🎓</span> Lecturer
                </Link>

            </div>

            {/* Right Section: Welcome Message & Branding */}
            <div className="welcome-section">
                <img src="src/images/university_logo.png" alt="University Logo" className="university-logo" />
                <h1>Welcome to Heimlick University</h1>
                <img src="src/images/campus_students.jpg" alt="Students" className="welcome-image" />
            </div>
        </div>
    );
};

export default MyLogin;
