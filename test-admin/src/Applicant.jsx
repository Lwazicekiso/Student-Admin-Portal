import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import { PocketBaseProvider } from '../ra-pocketbase'; 
import { Admin, Resource } from 'react-admin';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  ReferenceField,
  Edit,
  TextInput,
  DateInput,
  required,
  FileInput,
  FileField,
  email,
  minLength,
  maxLength,
  BooleanInput,
  SelectInput,
  AutocompleteInput,
  ReferenceInput,
  SimpleForm,
  Create
} from 'react-admin';
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, createTheme, ThemeProvider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Create a custom theme that matches your CSS styling
const appTheme = createTheme({
  palette: {
    primary: {
      main: '#2C6485',
      dark: '#194D6C',
      light: '#0b5582',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#194D6C',
    },
    background: {
      default: '#f5f5f5',
    },
  },

  typography: {
    fontFamily: '"Times New Roman", Times, serif',
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.1em',
      marginBottom: '20px',
      color: '#194D6C',
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#194D6C',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },
    
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C6485',
          color: '#FFFFFF',
          minHeight: '60px',
          '&.Mui-expanded': {
            minHeight: '60px',
          },
        },
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
          backgroundColor: '#FFFFFF',
        },
      },
    },
    
    // Add AppBar styling to match the Student.css
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '120px',
          background: 'linear-gradient(to bottom, #2C6485, #0b5582)',
        }
      }
    },
    
    // Add Toolbar styling
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '100px',
          justifyContent: 'space-between',
          position: 'relative',
        }
      }
    }
  },
});

const StyledPageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to bottom, #2C6485, #0b5582)',
  color: '#FFFFFF',
  padding: '40px 20px 30px', 
  borderRadius: '0 0 10px 10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
}));

const StyledFormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  padding: '0 20px 40px 20px',
  margin: '0 auto',
}));

// Key fix 1: Set proper top padding to ensure content appears below the fixed AppBar
const AppFormContainer = styled(Box)(({ theme }) => ({
  paddingTop: '120px', // Match the height of the AppBar
  marginBottom: '40px',
}));

const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: '#2C6485',
  color: '#FFFFFF',
  padding: '8px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#194D6C',
  },
}));

// Custom AppBar component for Applicant form
const ApplicantAppBar = props => (
  <Box 
    sx={{
      height: '100px',
      background: 'linear-gradient(to bottom, #2C6485, #0b5582)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Cape College Text Structure */}
      <Box sx={{ position: 'relative', width: '300px', height: '70px' }}>
        <Typography sx={{
          position: 'absolute',
          left: '33px',
          top: '-40px',
          fontFamily: 'Dynalight',
          fontWeight: 400,
          fontSize: '100px',
          color: '#FFFFFF'
        }}>C</Typography>
        <Typography sx={{
          position: 'absolute',
          left: '89px',
          top: '10px',
          fontFamily: 'Dynalight',
          fontWeight: 400,
          fontSize: '30px',
          color: '#FFFFFF'
        }}>ape</Typography>
        <Typography sx={{
          position: 'absolute',
          left: '137px',
          top: '-40px',
          fontFamily: 'Dynalight',
          fontWeight: 400,
          fontSize: '100px',
          color: '#FFFFFF'
        }}>C</Typography>
        <Typography sx={{
          position: 'absolute',
          left: '189px',
          top: '7px',
          fontFamily: 'Dynalight',
          fontWeight: 400,
          fontSize: '30px',
          color: '#FFFFFF'
        }}>ollege</Typography>
      </Box>
    </Box>
    
    {/* Title */}
    <Typography sx={{
      fontFamily: '"Times New Roman", Times, serif',
      fontWeight: 400,
      fontSize: '51px',
      letterSpacing: '0.1em',
      color: '#F8F8F8',
    }}>
      Applicant
    </Typography>
  </Box>
);

const { authProvider, dataProvider } = PocketBaseProvider('https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev');

// Validation functions
const validateEmail = [required(), email()];
const validateRequired = [required()];
const validateName = [required(), minLength(1), maxLength(100)];
const validateMobile = [required(), minLength(1), maxLength(20)];
const validateAddress = [required(), minLength(1), maxLength(200)];
const validateNationalId = [required(), minLength(1), maxLength(50)];
const validateHighSchool = [required(), minLength(1), maxLength(200)];

const GradeInput = ({ source, record = {}, onChange }) => {
  const initialValue = record[source] || [];
  const [grades, setGrades] = useState(initialValue.length > 0 ? initialValue : [{ subject: '', grade: '', startDate: '', endDate: '' }]);

  const handleAddGrade = () => {
    const newGrades = [...grades, { subject: '', grade: '', startDate: '', endDate: '' }];
    setGrades(newGrades);
    onChange && onChange(newGrades);
  };

  const handleRemoveGrade = (index) => {
    const newGrades = [...grades];
    newGrades.splice(index, 1);
    setGrades(newGrades);
    onChange && onChange(newGrades);
  };

  const handleGradeChange = (index, field, value) => {
    const newGrades = [...grades];
    newGrades[index][field] = value;
    setGrades(newGrades);
    onChange && onChange(newGrades);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>Academic Grades</Typography>
      {grades.map((grade, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={3}>
            <TextInput
              source={`${source}.${index}.subject`}
              label="Subject"
              record={{ [`${source}.${index}.subject`]: grade.subject }}
              onChange={(e) => handleGradeChange(index, 'subject', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextInput
              source={`${source}.${index}.grade`}
              label="Grade"
              record={{ [`${source}.${index}.grade`]: grade.grade }}
              onChange={(e) => handleGradeChange(index, 'grade', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DateInput
              source={`${source}.${index}.startDate`}
              label="Start Date"
              record={{ [`${source}.${index}.startDate`]: grade.startDate }}
              onChange={(value) => handleGradeChange(index, 'startDate', value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <DateInput
              source={`${source}.${index}.endDate`}
              label="End Date"
              record={{ [`${source}.${index}.endDate`]: grade.endDate }}
              onChange={(value) => handleGradeChange(index, 'endDate', value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledButton type="button" onClick={() => handleRemoveGrade(index)}>
              Remove
            </StyledButton>
          </Grid>
        </Grid>
      ))}
      <StyledButton type="button" onClick={handleAddGrade}>
        Add Grade
      </StyledButton>
    </Box>
  );
};

export const ApplicantList = () => (
  <List>
    <Datagrid rowClick="edit" bulkActionButtons={false} sx={{
      '& .RaDatagrid-headerCell': {
        backgroundColor: '#194D6C',
        color: '#FFFFFF',
      },
      '& .RaDatagrid-row': {
        '&:nth-of-type(odd)': {
          backgroundColor: '#f5f5f5',
        },
        '&:hover': {
          backgroundColor: 'rgba(44, 100, 133, 0.1)',
        },
      },
    }}>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="mobile" />
      <DateField source="dob" />
      <BooleanField source="hasDisability" />
      <ReferenceField source="Course_selection" reference="Course">
        <TextField source="name" />
      </ReferenceField>
      <FileField source="documents" title="Documents" />
    </Datagrid>
  </List>
);

const ApplicantCreate = (props) => {
  return (
    <Create {...props}> 
      <SimpleForm>
        {/* Key fix 2: Remove the marginTop override that was pushing content too far down */}
        <AppFormContainer>
          <StyledPageHeader sx={{width:'100%'}}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', letterSpacing: '0.1em' }}>
              Applicant Registration Form
            </Typography>
          </StyledPageHeader>
          
          <StyledFormContainer>
            {/* ACCORDION 1: Personal Information */}
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                aria-controls="personal-info-content"
                id="personal-info-header"
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Personal Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <SelectInput
                      source="title"
                      label="Title"
                      choices={[
                        { id: 'Mr', name: 'Mr' },
                        { id: 'Mrs', name: 'Mrs' },
                        { id: 'Ms', name: 'Ms' },
                        { id: 'Dr', name: 'Dr' },
                        { id: 'Other', name: 'Other' },
                      ]}
                      validate={validateRequired}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectInput
                      source="gender"
                      label="Gender"
                      choices={[
                        { id: 'male', name: 'Male' },
                        { id: 'female', name: 'Female' },
                        { id: 'other', name: 'Other' },
                      ]}
                      validate={validateRequired}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="firstName" label="First Name" validate={validateName} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="lastName" label="Last Name" validate={validateName} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DateInput source="dob" label="Date of Birth" validate={validateRequired} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="nationalId" label="National ID" validate={validateNationalId} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="citizen" label="Citizenship" validate={validateRequired} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="country" label="Country" validate={validateRequired} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FileInput source="documents" label="Documents" validate={validateRequired}/>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* ACCORDION 2: Contact Information */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                aria-controls="contact-info-content"
                id="contact-info-header"
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Contact Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="email" label="Email Address" validate={validateEmail} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput source="mobile" label="Mobile Number" validate={validateMobile} fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput 
                      source="address" 
                      label="Full Address" 
                      validate={validateAddress} 
                      fullWidth 
                      multiline 
                      rows={3}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* ACCORDION 3: Disabilities */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                aria-controls="disabilities-content"
                id="disabilities-header"
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Disabilities</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <BooleanInput source="hasDisability" label="Do you have any disabilities?" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      source="disabilityDetails"
                      label="Please provide details about your disability"
                      fullWidth
                      multiline
                      rows={3}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* ACCORDION 4: Course Selection */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                aria-controls="course-selection-content"
                id="course-selection-header"
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Course Selection</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <ReferenceInput source="Course_selection" reference="Course">
                      <AutocompleteInput
                        optionText="Course_Name"
                        validate={validateRequired}
                        fullWidth
                        label="Select Course"
                      />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* ACCORDION 5: Personal Essay */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                aria-controls="essay-content"
                id="essay-header"
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Personal Essay</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextInput
                      source="essay"
                      label="Personal Essay"
                      fullWidth
                      multiline
                      rows={6}
                      helperText="Tell us about your aspirations and why you are selecting this course"
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </StyledFormContainer>
        </AppFormContainer>
      </SimpleForm>
    </Create>
  );
};

const ApplicantEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <AppFormContainer>
        <StyledPageHeader>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', letterSpacing: '0.1em' }}>
            Edit Applicant Details
          </Typography>
        </StyledPageHeader>

        <StyledFormContainer>
          {/* Personal Information */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
              aria-controls="personal-info-content"
              id="personal-info-header"
            >
              <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <SelectInput
                    source="title"
                    label="Title"
                    choices={[
                      { id: 'Mr', name: 'Mr' },
                      { id: 'Mrs', name: 'Mrs' },
                      { id: 'Ms', name: 'Ms' },
                      { id: 'Dr', name: 'Dr' },
                      { id: 'Other', name: 'Other' },
                    ]}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectInput
                    source="gender"
                    label="Gender"
                    choices={[
                      { id: 'male', name: 'Male' },
                      { id: 'female', name: 'Female' },
                      { id: 'other', name: 'Other' },
                    ]}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="firstName" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="lastName" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DateInput source="dob" label="Date of Birth" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="nationalId" label="National ID" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="citizen" label="Citizenship" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="country" fullWidth />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Contact Information */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}>
              <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Contact Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextInput source="email" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput source="mobile" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextInput source="address" fullWidth multiline rows={3} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Disabilities */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}>
              <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Disabilities</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <BooleanInput source="hasDisability" label="Do you have any disabilities?" />
                </Grid>
                <Grid item xs={12}>
                  <TextInput source="disabilityDetails" fullWidth multiline rows={3} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Course Selection */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}>
              <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Course Selection</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ReferenceInput source="Course_selection" reference="Course">
                    <AutocompleteInput optionText="name" fullWidth />
                  </ReferenceInput>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Essay */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}>
              <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>Personal Essay</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item xs={12}>
                <TextInput source="essay" fullWidth multiline rows={6} />
              </Grid>
            </AccordionDetails>
          </Accordion>
        </StyledFormContainer>
      </AppFormContainer>
    </SimpleForm>
  </Edit>
);

// Key fix 3: Add a container with proper spacing around the Admin component
const Applicant = () => (
  <ThemeProvider theme={appTheme}>
    <ApplicantAppBar />
    <Box sx={{ paddingTop: '100px' }}> {/* Add padding equal to AppBar height */}
      <Admin 
        dataProvider={dataProvider} 
        theme={appTheme}
        layout={props => <Box>{props.children}</Box>} // Override the default layout to remove sidebar
      >
        <Resource name="Applicants" list={ApplicantList} create={ApplicantCreate} edit={ApplicantEdit} />
      </Admin>
    </Box>
  </ThemeProvider>
);

export default Applicant;