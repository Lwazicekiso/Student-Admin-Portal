import { Create, SimpleForm, TextInput, DateInput, BooleanInput, Toolbar, SaveButton,ArrayInput,SimpleFormIterator,Button,NumberInput,SelectInput } from 'react-admin';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';

// for form validation
import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin';
// Reusable styling variables
const styles = {
    accordionHeader: {
        backgroundColor: '#1A496D',
        color: '#FFF',
        padding: '10px',
  

    },
    accordionDetails: {
        backgroundColor: '#F7F9FC',
        padding: '20px',
        border: '1px solid #E0E0E0',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    iconMargin: {
        marginRight: '10px',
    },
    saveButton: {
        backgroundColor: 'red',
        color: '#FFF',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#E64A19',
        },
    },
    toolbar: {
        justifyContent: 'center',
        marginTop: '20px',
    },
};







export const ApplicantForm = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
<Create>
    {/* The SimpleForm component wraps the form content and includes a custom toolbar with a Save button */}
    <SimpleForm toolbar={<SaveToolbar />}>
        
        {/* Accordion for the "Personal Information" section */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                {/* LockIcon to visually indicate the section */}
                <LockIcon sx={styles.iconMargin} />
                {/* Title for the "Personal Information" section */}
                <Typography variant="h6">1. Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
                {/* PersonalInfo component contains the input fields related to personal information */}
                <PersonalInfo />
            </AccordionDetails>
        </Accordion>

        {/* Accordion for the "Contact Information" section */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '100%', borderRadius:'10%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                {/* EmailIcon to visually indicate the section */}
                <EmailIcon sx={styles.iconMargin} />
                {/* Title for the "Contact Information" section */}
                <Typography variant="h6">2. Contact Information</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
                {/* ContactInfo component contains the input fields related to contact information */}
                <ContactInfo />
            </AccordionDetails>
        </Accordion>

        {/* Accordion for the "Disabilities" section */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                {/* AccessibilityIcon to visually indicate the section */}
                <AccessibilityIcon sx={styles.iconMargin} />
                {/* Title for the "Disabilities" section */}
                <Typography variant="h6">3. Disabilities</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
                {/* Disabilities component contains the input fields related to disabilities */}
                <Disabilities />
            </AccordionDetails>
        </Accordion>

        {/* Accordion for the "Academic History" section */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                {/* SchoolIcon to visually indicate the section */}
                <SchoolIcon sx={styles.iconMargin} />
                {/* Title for the "Academic History" section */}
                <Typography variant="h6">4. Academic History</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
                {/* AcademicHistory component contains the input fields related to academic history */}
                <AcademicHistory />
            </AccordionDetails>
        </Accordion>

        {/* Accordion for the "Personal Essay" section */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                {/* AssignmentIcon to visually indicate the section */}
                <AssignmentIcon sx={styles.iconMargin} />
                {/* Title for the "Personal Essay" section */}
                <Typography variant="h6">5. Personal Essay</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
                {/* PersonalEssay component contains the input field for the personal essay */}
                <PersonalEssay />
            </AccordionDetails>
        </Accordion>
        {/* Accordion for Course selection*/}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ width: '100%' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={styles.accordionHeader}>
                        <SchoolIcon sx={styles.iconMargin} />
                        <Typography variant="h6">6. Course Selection</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={styles.accordionDetails}>
                        <SelectInput
                            source="course"
                            label="Select Course"
                            fullWidth
                            validate={required("Choose a Course")}
                            choices={[
                                { id: 'bachelor_cs', name: 'Bachelor of Computer Science' },
                                { id: 'bachelor_eng', name: 'Bachelor of Engineering' },
                                { id: 'bachelor_arts', name: 'Bachelor of Arts' },
                                { id: 'bachelor_business', name: 'Bachelor of Business Administration' },
                                { id: 'bachelor_med', name: 'Bachelor of Medicine' },
                                { id: 'bachelor_law', name: 'Bachelor of Law' },
                                { id: 'bachelor_psychology', name: 'Bachelor of Psychology' },
                                { id: 'bachelor_social_science', name: 'Bachelor of Social Science' },
                                { id: 'bachelor_health_science', name: 'Bachelor of Health Science' },
                                { id: 'Bachelor_of_Data_Analysis', name: 'Bachelor in Data Analysis' },
                                { id: 'Bachelor_of_Supply_Chain_Information_Analysis', name: 'Bachelor of Supply Chain' },
                                { id: 'Bachelor_of_Data_Analysis', name: 'Bachelor of Commerce :Accounting science ' },
                                { id: 'Bachelor_of_Supply_Chain_Information_Analysis', name: 'Bachelor of Information Analysis' },
                            ]}
                            helperText="Select the bachelor's degree program you wish to enroll in."
                        />
                    </AccordionDetails>
                </Accordion>
        
    </SimpleForm>
</Create>

    );
}

// Toolbar with Save button// Toolbar with Save button
const SaveToolbar = () => (
    <Toolbar>
        <SaveButton /> 
    </Toolbar>
);
/*
- **Toolbar component**: Provides a toolbar UI that includes a save button.
- **SaveButton**: Triggers a form submission to save the data input by the user.
*/

const PersonalInfo = () => (
    <>
        <TextInput
            source="firstName"
            label="First Name"
            fullWidth
            validate={[required('First name is required.'), minLength(2, 'First name must be at least 2 characters long.')] } // Custom error messages
            helperText="Enter your given name as it appears on official documents."
        />
        <TextInput
            source="lastName"
            label="Last Name"
            fullWidth
            validate={[required('Last name is required.'), minLength(2, 'Last name must be at least 2 characters long.')] } // Custom error messages
            helperText="Enter your family name or surname."
        />
        <SelectInput
            source="gender"
            label="Gender"
            fullWidth
            choices={[
                { id: 'male', name: 'Male' },
                { id: 'female', name: 'Female' },
                { id: 'other', name: 'Other' }
            ]}
            validate={[required('Gender selection is required.')]} // Custom error message
            helperText="Select your gender identity."
        />
        <SelectInput
            source="title"
            label="Title"
            fullWidth
            choices={[
                { id: 'Mr', name: 'Mr' },
                { id: 'Mrs', name: 'Mrs' },
                { id: 'Ms', name: 'Ms' },
                { id: 'Dr', name: 'Dr' },
                { id: 'Other', name: 'Other' }
            ]}
            validate={[required('Title selection is required.')]} // Custom error message
            helperText="Select the appropriate title (e.g., Mr, Mrs, Dr)."
        />
        <DateInput
            source="dob"
            label="Date of Birth"
            fullWidth
            validate={[required('Date of birth is required.')]} // Custom error message
            helperText="Enter your date of birth in YYYY-MM-DD format."
        />
        <TextInput
            source="nationalId"
            label="Identity Number"
            fullWidth
            validate={[required('Identity number is required.'), minLength(6, 'Identity number must be at least 6 characters long.')] } // Custom error messages
            helperText="Enter your national identity number."
        />
        <SelectInput
            source="citizen"
            label="Citizen Status"
            fullWidth
            validate={[required('Citizen status is required.')]} // Custom error message
            helperText="Specify your citizenship status in South Africa."
            choices={[
                { id: 'citizen', name: 'Citizen' },
                { id: 'permanent_resident', name: 'Permanent Resident' },
                { id: 'temporary_resident', name: 'Temporary Resident' },
                { id: 'green_card', name: 'Work Visa' },
                { id: 'non_citizen', name: 'Non-Citizen' }
            ]}
        />
        <TextInput
            source="country"
            label="Country of Birth"
            fullWidth
            validate={[required('Country of birth is required.')]} // Custom error message
            helperText="Enter the country where you were born."
        />
    </>
);
// form for selecting course
const CourseForm = () => (
        <SelectInput 
            source="course" 
            choices={[
                { id: 'Bachelor_of_Science', name: 'Bachelor of Science' },
                { id: 'Bachelor_of_Arts', name: 'Bachelor of Arts' },
                { id: 'Bachelor_of_Commerce', name: 'Bachelor of Commerce' },
                { id: 'Bachelor_of_Engineering', name: 'Bachelor of Engineering' },
                { id: 'Bachelor_of_Data_Analysis', name: 'Bachelor in Data Analysis' },
                { id: 'Bachelor_of_Supply_Chain_Information_Analysis', name: 'Bachelor in Supply Chain and Information Analysis' },
            ]}
        />
);


const ContactInfo = () => (
    <>
        <TextInput
            source="email"
            label="Email"
            fullWidth
            validate={[required('Email is required.'), email('Enter a valid email address.')]} // Custom error messages
            helperText="Enter a valid email address."
        />
        <TextInput
            source="mobile"
            label="Mobile Number"
            fullWidth
            validate={[required('Mobile number is required.'),minLength(10), maxLength(10)] } // Custom error message
            helperText="Enter a valid mobile number."
        />
        <TextInput
            source="address"
            label="Residential Address"
            fullWidth
            validate={[required('Residential address is required.')] } // Custom error message
            helperText="Enter your current residential address."
        />
    </>
);


const Disabilities = () => {
    const [hasDisability, setHasDisability] = useState(false);

    return (
        <Box fullWidth>
            <BooleanInput
                source="hasDisability"
                label="Do you have any disabilities?"
                validate={[required()]}
                onChange={(e) => setHasDisability(e.target.checked)}
                helperText="Check if you have a disability that you would like to disclose."
            />
            {hasDisability && (
                <TextInput
                    source="disabilityDetails"
                    label="Please describe your disability"
                    fullWidth
                    helperText="Provide details about your disability."
                />
            )}
        </Box>
    );
};

// form validation
const maxThree = (value) => {
    if (value > 3) {
        return 'Grade must be less than or equal to 3';
    }
    return undefined; // No error
};




const AcademicHistory = () => (
    <>
        <TextInput
            source="highSchool"
            label="High School Name"
            fullWidth
            validate={[required()]}
            helperText="Enter the name of the high school you attended."
        />
<ArrayInput source="grades">
    <SimpleFormIterator>
        <SelectInput
            source="subject"
            label="Subject"
            fullWidth
            choices={[
                { id: 'math', name: 'Mathematics' },
                { id: 'english', name: 'English' },
                { id: 'science', name: 'Physical Science' },
                { id: 'biology', name: 'Life Sciences' },
                { id: 'chemistry', name: 'Chemistry' },
                { id: 'physics', name: 'Physics' },
                { id: 'history', name: 'History' },
                { id: 'geography', name: 'Geography' },
                { id: 'economics', name: 'Economics' },
                { id: 'accounting', name: 'Accounting' },
                { id: 'business_studies', name: 'Business Studies' },
                { id: 'computer_science', name: 'Computer Science' },
                { id: 'information_technology', name: 'Information Technology' },
                { id: 'programming', name: 'Programming' },
                { id: 'visual_arts', name: 'Visual Arts' },
                { id: 'music', name: 'Music' },
                { id: 'drama', name: 'Drama' },
                { id: 'physical_education', name: 'Physical Education' },
                { id: 'engineering_graphics_design', name: 'Engineering Graphics and Design' },
                { id: 'agriculture', name: 'Agricultural Science' },
                { id: 'consumer_studies', name: 'Consumer Studies' },
                { id: 'hospitality_studies', name: 'Hospitality Studies' },
                { id: 'tourism', name: 'Tourism' },
                { id: 'religious_studies', name: 'Religious Studies' },
                { id: 'life_orientation', name: 'Life Orientation' },
                { id: 'foreign_language', name: 'Foreign Language' },
                { id: 'french', name: 'French' },
                { id: 'spanish', name: 'Spanish' },
                { id: 'german', name: 'German' },
                { id: 'afrikaans', name: 'Afrikaans' },
                { id: 'portuguese', name: 'Portuguese' },
                { id: 'mandarin', name: 'Mandarin' },
                { id: 'latin', name: 'Latin' },
                { id: 'arabic', name: 'Arabic' },
                { id: 'zulu', name: 'Zulu' },
                { id: 'isiXhosa', name: 'IsiXhosa' },
                { id: 'sepedi', name: 'Sepedi' },
                { id: 'setswana', name: 'Setswana' },
                { id: 'sotho', name: 'Sotho' },
                { id: 'tshivenda', name: 'Tshivenda' },
                { id: 'siswati', name: 'SiSwati' },
                { id: 'northern_sotho', name: 'Northern Sotho' },
                { id: 'isiNdebele', name: 'IsiNdebele' },
                { id: 'art_and_culture', name: 'Art and Culture' },
                { id: 'woodwork', name: 'Woodwork' },
                { id: 'technical_drawing', name: 'Technical Drawing' },
                { id: 'mechanical_technology', name: 'Mechanical Technology' },
                { id: 'electrical_technology', name: 'Electrical Technology' },
            ]}
        />
        <NumberInput source="grade" label="Final Grade" validate={[required(), maxThree]}  fullWidth />

    </SimpleFormIterator>
    <DateInput source="startDate" label="Start Date" validate={[required()]} />
    <DateInput source="endDate" label="End Date" validate={[required()]} />
</ArrayInput>




    </>
);



const PersonalEssay=()=>(
   <>
    <TextInput
            source="essay"
            label="Personal Essay"
            multiline
            rows={4}
            fullWidth
            helperText="Write a 1,500-word essay on your life experiences, achievements, and passions."
        />
  
   </>

);

export default ApplicantForm;

/*

In PocketBase, each field needs to have a specific data type depending on its usage. Here's the breakdown of the appropriate field types for each field in the form:

1. Personal Information
firstName: Text field (Single Line).
lastName: Text field (Single Line).
gender: Select field (with options: Male, Female, Other).
title: Select field (with options: Mr, Mrs, Ms, Dr, Other).
dob: Date field.
nationalId: Text field (Single Line).
citizen: Text field (Single Line).
country: Text field (Single Line).


2. Contact Information
email: Email field.
phone: Text field (Single Line, or Phone field if available).
emergencyContacts: JSON field (contains an array of objects with the following subfields):
code: Text field (Single Line) for country code.
number: Number field for contact number.

altEmail: Email field (optional).



3. Disabilities
hasDisability: Boolean field (true/false).
disabilityDetails: Text field (Single Line or Multiline), visible only when hasDisability is true.


4. Academic History
highSchool: Text field (Single Line).
grades: JSON field (contains an array of objects with the following subfields):
subject: Select field (with a list of subjects as options).
grade: Number field for the final grade.


5. Personal Essay
essay: Text field (Multiline) for longer text.

*/