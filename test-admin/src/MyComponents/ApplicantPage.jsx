import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import '../Styling/Applicant.css'; // Import your CSS file for styling

function ApplicantForm() {
  // Initialize PocketBase client - using a more reliable connection approach
  const [pb, setPb] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('initializing');
  
  // Initialize PocketBase and check connection
  useEffect(() => {
    try {
      // Using a relative URL is more reliable than hardcoding a domain
      // Change this URL to match your actual PocketBase server
      const pbClient = new PocketBase('https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev/');
      setPb(pbClient);
      
      // Test connection
      pbClient.health.check()
        .then(() => {
          console.log("PocketBase connection established");
          setConnectionStatus('connected');
        })
        .catch(err => {
          console.error("PocketBase connection failed:", err);
          setConnectionStatus('failed');
        });
    } catch (error) {
      console.error("Error initializing PocketBase:", error);
      setConnectionStatus('failed');
    }
  }, []);
  
  // Define wizard steps
  const steps = [
    { id: 'personal', title: 'Personal Information' },
    { id: 'contact', title: 'Contact Information' },
    { id: 'disabilities', title: 'Disabilities' },
    { id: 'course', title: 'Course Selection' },
    { id: 'grades', title: 'Academic Grades' },
    { id: 'essay', title: 'Personal Essay' },
    { id: 'review', title: 'Review & Submit' }
  ];
  
  // State for form data
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    nationalId: '',
    citizen: '',
    country: '',
    highSchool: '',
    documents: null,
    email: '',
    mobile: '',
    address: '',
    hasDisability: false,
    disabilityDetails: '',
    Course_selection: '',
    academicGrades: [{ subject: '', grade: '', startDate: '', endDate: '' }],
    essay: ''
  });
  
  // State for wizard control
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  
  // Fetch courses on component mount
  useEffect(() => {
    if (!pb || connectionStatus !== 'connected') return;
    
    async function fetchCourses() {
      setLoadingCourses(true);
      try {
        const records = await pb.collection('Course').getFullList({
          sort: 'Course_Name',
        });
        console.log("Courses fetched:", records);
        setAvailableCourses(records);
        setLoadingCourses(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoadingCourses(false);
      }
    }
    
    fetchCourses();
  }, [pb, connectionStatus]);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      // Check file size (5MB max)
      if (files[0] && files[0].size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle academic grade changes
  const handleGradeChange = (index, field, value) => {
    const newGrades = [...formData.academicGrades];
    newGrades[index][field] = value;
    
    setFormData({
      ...formData,
      academicGrades: newGrades
    });
  };
  
  // Add new grade
  const handleAddGrade = () => {
    setFormData({
      ...formData,
      academicGrades: [
        ...formData.academicGrades,
        { subject: '', grade: '', startDate: '', endDate: '' }
      ]
    });
  };
  
  // Remove grade
  const handleRemoveGrade = (index) => {
    const newGrades = [...formData.academicGrades];
    newGrades.splice(index, 1);
    
    setFormData({
      ...formData,
      academicGrades: newGrades
    });
  };
  
  // Navigate to next step
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Submit form data to PocketBase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!pb) {
      setSubmitResult({ 
        success: false, 
        message: 'Database connection not established. Please try again later.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitResult({ success: false, message: '' });
    
    try {
      // Create FormData object for file upload
      const formDataToSend = new FormData();
      
      // Add all fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'documents' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else if (key === 'academicGrades') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else if (key === 'hasDisability') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Debug: log what's being sent (for debugging only)
      console.log('Submitting form data with the following fields:');
      for (const pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      
      // Submit to PocketBase
      const record = await pb.collection('Applicants').create(formDataToSend);
      
      console.log('Form submitted successfully:', record);
      setSubmitResult({ 
        success: true, 
        message: 'Your application has been submitted successfully!' 
      });
      
      // Reset to first step after successful submission if needed
      // setCurrentStep(0);
      // setFormData({...initialFormData});
      
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'Failed to submit application. Please try again.';
      
      // PocketBase stores detailed errors in error.data
      if (error.data) {
        console.error('Detailed error:', error.data);
        
        // Extract field-specific errors if available
        const fieldErrors = [];
        for (const field in error.data) {
          if (error.data[field] && error.data[field].message) {
            fieldErrors.push(`${field}: ${error.data[field].message}`);
          }
        }
        
        if (fieldErrors.length > 0) {
          errorMessage = `Validation errors: ${fieldErrors.join(', ')}`;
        }
      }
      
      setSubmitResult({ 
        success: false, 
        message: `Error: ${error.message || errorMessage}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Validate current step
  const validateStep = () => {
    const currentStepId = steps[currentStep].id;
    
    switch (currentStepId) {
      case 'personal':
        return formData.title && formData.firstName && formData.lastName && 
               formData.gender && formData.dob && formData.nationalId &&
               formData.citizen && formData.country && formData.highSchool;
      case 'contact':
        return formData.email && formData.mobile && formData.address;
      case 'disabilities':
        return true; // Always valid as this step is optional
      case 'course':
        return formData.Course_selection !== '';
      case 'grades':
        return formData.academicGrades.length > 0 && 
               formData.academicGrades.every(grade => grade.subject && grade.grade);
      case 'essay':
        return true; // Essay could be optional
      default:
        return true;
    }
  };
  
  // Render progress bar
  const renderProgressBar = () => {
    const progress = ((currentStep + 1) / steps.length) * 100;
    
    return (
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="step-indicator">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
        </div>
      </div>
    );
  };
  
  // Render step navigation
  const renderStepNavigation = () => {
    return (
      <div className="step-navigation">
        <button 
          type="button" 
          className="prev-button" 
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        
        {currentStep < steps.length - 1 ? (
          <button 
            type="button" 
            className="next-button" 
            onClick={nextStep}
            disabled={!validateStep()}
          >
            Next
          </button>
        ) : (
          <button 
            type="submit" 
            className="submit-button" 
            disabled={isSubmitting || connectionStatus !== 'connected'}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        )}
      </div>
    );
  };
  
  // Render Personal Information step
  const renderPersonalInfoStep = () => {
    return (
      <div className="step-content">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <select 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange}
              required
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select 
              id="gender" 
              name="gender" 
              value={formData.gender} 
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              name="dob" 
              value={formData.dob} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="nationalId">National ID</label>
            <input 
              type="text" 
              id="nationalId" 
              name="nationalId" 
              value={formData.nationalId} 
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="citizen">Citizenship</label>
            <input 
              type="text" 
              id="citizen" 
              name="citizen" 
              value={formData.citizen} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input 
              type="text" 
              id="country" 
              name="country" 
              value={formData.country} 
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="highSchool">High School</label>
            <input 
              type="text" 
              id="highSchool" 
              name="highSchool" 
              value={formData.highSchool} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="documents">Documents (PDF only)</label>
            <input 
              type="file" 
              id="documents" 
              name="documents" 
              accept="application/pdf" 
              onChange={handleInputChange}
              required
            />
            <small>Only PDF files are accepted (max 5MB)</small>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Contact Information step
  const renderContactInfoStep = () => {
    return (
      <div className="step-content">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="address">Full Address</label>
            <textarea 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Disabilities step
  const renderDisabilitiesStep = () => {
    return (
      <div className="step-content">
        <div className="form-row">
          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="hasDisability" 
              name="hasDisability" 
              checked={formData.hasDisability} 
              onChange={handleInputChange}
            />
            <label htmlFor="hasDisability">Do you have any disabilities?</label>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="disabilityDetails">Please provide details about your disability</label>
            <textarea 
              id="disabilityDetails" 
              name="disabilityDetails" 
              value={formData.disabilityDetails} 
              onChange={handleInputChange}
              rows="3"
              disabled={!formData.hasDisability}
            ></textarea>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Course Selection step
  const renderCourseSelectionStep = () => {
    return (
      <div className="step-content">
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="Course_selection">Select Course</label>
            {loadingCourses ? (
              <div className="loading-message">Loading courses...</div>
            ) : (
              <>
                {availableCourses.length > 0 ? (
                  <select 
                    id="Course_selection" 
                    name="Course_selection" 
                    value={formData.Course_selection} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a Course</option>
                    {availableCourses.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.Course_Name || course.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="error-message">
                    No courses found. Please contact administrator.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  // Render Academic Grades step
  const renderAcademicGradesStep = () => {
    return (
      <div className="step-content">
        <h4>Academic Grades</h4>
        
        {formData.academicGrades.map((grade, index) => (
          <div className="grade-row" key={index}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor={`subject-${index}`}>Subject</label>
                <input 
                  type="text" 
                  id={`subject-${index}`} 
                  value={grade.subject} 
                  onChange={(e) => handleGradeChange(index, 'subject', e.target.value)} 
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`grade-${index}`}>Grade</label>
                <input 
                  type="text" 
                  id={`grade-${index}`} 
                  value={grade.grade} 
                  onChange={(e) => handleGradeChange(index, 'grade', e.target.value)} 
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`startDate-${index}`}>Start Date</label>
                <input 
                  type="date" 
                  id={`startDate-${index}`} 
                  value={grade.startDate} 
                  onChange={(e) => handleGradeChange(index, 'startDate', e.target.value)} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor={`endDate-${index}`}>End Date</label>
                <input 
                  type="date" 
                  id={`endDate-${index}`} 
                  value={grade.endDate} 
                  onChange={(e) => handleGradeChange(index, 'endDate', e.target.value)} 
                />
              </div>
              
              <div className="form-group button-group">
                <button 
                  type="button" 
                  className="remove-button" 
                  onClick={() => handleRemoveGrade(index)}
                  disabled={formData.academicGrades.length <= 1}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="button-row">
          <button type="button" className="add-button" onClick={handleAddGrade}>
            Add Grade
          </button>
        </div>
      </div>
    );
  };
  
  // Render Personal Essay step
  const renderPersonalEssayStep = () => {
    return (
      <div className="step-content">
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="essay">Personal Essay</label>
            <textarea 
              id="essay" 
              name="essay" 
              value={formData.essay} 
              onChange={handleInputChange}
              rows="6"
            ></textarea>
            <small>Tell us about your aspirations and why you are selecting this course</small>
          </div>
        </div>
      </div>
    );
  };
  
  // Render Review step
  const renderReviewStep = () => {
    const selectedCourse = availableCourses.find(course => course.id === formData.Course_selection);
    
    return (
      <div className="step-content review-step">
        <h3>Review Your Application</h3>
        <p>Please review your application details before submitting.</p>
        
        <div className="review-section">
          <h4>Personal Information</h4>
          <div className="review-item">
            <span className="review-label">Name:</span>
            <span className="review-value">{formData.title} {formData.firstName} {formData.lastName}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Gender:</span>
            <span className="review-value">{formData.gender}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Date of Birth:</span>
            <span className="review-value">{formData.dob}</span>
          </div>
          <div className="review-item">
            <span className="review-label">National ID:</span>
            <span className="review-value">{formData.nationalId}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Citizenship:</span>
            <span className="review-value">{formData.citizen}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Country:</span>
            <span className="review-value">{formData.country}</span>
          </div>
          <div className="review-item">
            <span className="review-label">High School:</span>
            <span className="review-value">{formData.highSchool}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Documents:</span>
            <span className="review-value">{formData.documents ? formData.documents.name : 'No document uploaded'}</span>
          </div>
        </div>
        
        <div className="review-section">
          <h4>Contact Information</h4>
          <div className="review-item">
            <span className="review-label">Email:</span>
            <span className="review-value">{formData.email}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Mobile:</span>
            <span className="review-value">{formData.mobile}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Address:</span>
            <span className="review-value">{formData.address}</span>
          </div>
        </div>
        
        <div className="review-section">
          <h4>Disabilities</h4>
          <div className="review-item">
            <span className="review-label">Has Disability:</span>
            <span className="review-value">{formData.hasDisability ? 'Yes' : 'No'}</span>
          </div>
          {formData.hasDisability && (
            <div className="review-item">
              <span className="review-label">Details:</span>
              <span className="review-value">{formData.disabilityDetails}</span>
            </div>
          )}
        </div>
        
        <div className="review-section">
          <h4>Course Selection</h4>
          <div className="review-item">
            <span className="review-label">Selected Course:</span>
            <span className="review-value">
              {selectedCourse ? (selectedCourse.Course_Name || selectedCourse.name) : 'No course selected'}
            </span>
          </div>
        </div>
        
        <div className="review-section">
          <h4>Academic Grades</h4>
          {formData.academicGrades.map((grade, index) => (
            <div className="review-grade" key={index}>
              <div className="review-item">
                <span className="review-label">Subject:</span>
                <span className="review-value">{grade.subject}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Grade:</span>
                <span className="review-value">{grade.grade}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Period:</span>
                <span className="review-value">
                  {grade.startDate && grade.endDate ? `${grade.startDate} to ${grade.endDate}` : 'Dates not specified'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="review-section">
          <h4>Personal Essay</h4>
          <div className="review-item essay">
            <div className="review-value essay-text">{formData.essay}</div>
          </div>
        </div>
        
        {submitResult.message && (
          <div className={`result-message ${submitResult.success ? 'success' : 'error'}`}>
            {submitResult.message}
          </div>
        )}
      </div>
    );
  };
  
  // Render current step content
  const renderStepContent = () => {
    const currentStepId = steps[currentStep].id;
    
    switch (currentStepId) {
      case 'personal':
        return renderPersonalInfoStep();
      case 'contact':
        return renderContactInfoStep();
      case 'disabilities':
        return renderDisabilitiesStep();
      case 'course':
        return renderCourseSelectionStep();
      case 'grades':
        return renderAcademicGradesStep();
      case 'essay':
        return renderPersonalEssayStep();
      case 'review':
        return renderReviewStep();
      default:
        return null;
    }
  };
  
  // Display connection error message if needed
  if (connectionStatus === 'failed') {
    return (
      <div className="applicant-form wizard">
        <div className="app-header">
          <div className="college-logo">
            <span className="c-letter">C</span>
            <span className="ape-text">ape</span>
            <span className="c-letter">C</span>
            <span className="ollege-text">ollege</span>
          </div>
          <h1 className="header-title">Applicant</h1>
        </div>
        
        <div className="connection-error">
          <h2>Connection Error</h2>
          <p>We could not connect to the database. Please try again later or contact support.</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="applicant-form wizard">
      {/* Header */}
      <div className="app-header">
        <div className="college-logo">
          <span className="c-letter">C</span>
          <span className="ape-text">ape</span>
          <span className="c-letter">C</span>
          <span className="ollege-text">ollege</span>
        </div>
        <h1 className="header-title">Applicant</h1>
      </div>
      
      {/* Form Container */}
      <div className="form-container">
        <div className="page-header">
          <h1>Applicant Registration Form</h1>
          {connectionStatus === 'initializing' && <div className="loading-message">Initializing connection...</div>}
        </div>
        
        {/* Progress bar */}
        {renderProgressBar()}
        
        <form onSubmit={handleSubmit}>
          {/* Step content */}
          <div className="wizard-step">
            <h2 className="step-title">{steps[currentStep].title}</h2>
            {renderStepContent()}
          </div>
          
          {/* Navigation buttons */}
          {renderStepNavigation()}
        </form>
      </div>
    </div>
  );
}

export default ApplicantForm;