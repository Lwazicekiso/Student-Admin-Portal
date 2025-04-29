import * as React from 'react';
import { DateInput,DateField,List, Datagrid, TextField, EmailField, NumberField, FileField, 
         Edit, Create, Show, SimpleForm, SimpleShowLayout, TextInput, NumberInput,
         FileInput, ReferenceField, ReferenceInput, SelectInput, ReferenceArrayField, SingleFieldList, ChipField,
         ReferenceArrayInput, BooleanField,
         required,
         useNotify, SelectArrayInput } from 'react-admin';
         
// ========================
// Applicants Resource
// Field: name (text)
// ========================
// Adjusted styles to prevent overlap with sidebar (260–280px) and top app bar (120px)
export const commonStyles = {
    width: '80%',

    marginTop: '40%',             // Leaves room for the app bar
    padding: '20px',
    minHeight: 'calc(100vh - 120px)', // Occupies the rest of the screen
    boxSizing: 'border-box',
    // color: 'blue',                // Optional global text color
};

// Improved DataGrid style
export const dataGridStyle = {
    height:"70%",
    width: '100%',
    // Table Header Cells
    '& .RaDatagrid-headerCell': {
    // Adjusted width for the sidebar
    width: '100%',

    },
    // Table Row Cells
    '& .RaDatagrid-rowCell': {
        width: '100%',

    },
    // Optional: a subtle hover effect for rows
    '& .RaDatagrid-row:hover': {
   // Adjusted width for the sidebar
   width: '80%',

    },
};

// ------------------------------------------------------------------
// Custom SimpleForm for Error Handling
// ------------------------------------------------------------------
const CustomSimpleForm = (props) => {
    const notify = useNotify();
    const onSubmitError = (error) => {
        notify(`Error: ${error.message}`, { type: 'warning' });
    };
    return <SimpleForm {...props} onSubmitError={onSubmitError} />;
};

// ------------------------------------------------------------------
// Validation for Applicants Forms
// ------------------------------------------------------------------
const validateApplicant = (values) => {
    const errors = {};
    if (!values.Name) {
        errors.Name = 'Name is required';
    }
    if (!values.Surname) {
        errors.Surname = 'Surname is required';
    }
    if (!values.Email) {
        errors.Email = 'Email is required';
    }
    // You can add additional validation (e.g., phone number format) here.
    return errors;
};

// ------------------------------------------------------------------
// Applicants List View
// ------------------------------------------------------------------
export const ApplicantList = (props) => (
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

// ------------------------------------------------------------------
// Applicants Show View
// ------------------------------------------------------------------
export const ApplicantShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <TextField source="Name" label="Name" />
            <TextField source="Surname" label="Surname" />
            <EmailField source="Email" label="Email" />
            <TextField source="Sex" label="Sex" />
            <FileField source="Matric_Report" label="Matric Report" title="Matric Report" />
            <FileField source="Certificate" label="Certificate" title="Certificate" />
            <NumberField source="Phone" label="Phone" />
            <DateField source="DOB" label="Date of Birth" />
        </SimpleShowLayout>
    </Show>
);

// ------------------------------------------------------------------
// Applicants Edit View
// ------------------------------------------------------------------
export const ApplicantEdit = (props) => (
    <Edit {...props} sx={commonStyles}>
        <CustomSimpleForm validate={validateApplicant}>
            <TextInput source="Name" label="Name" validate={required()} />
            <TextInput source="Surname" label="Surname" validate={required()} />
            <SelectInput
                source="Sex"
                label="Sex"
                choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' },
                    { id: 'Other', name: 'Other' },
                ]}
                validate={required()}
            />
            <FileInput source="Matric_Report" label="Matric Report" accept="image/*,application/pdf">
                <FileField source="src" title="Matric Report" />
            </FileInput>
            <FileInput source="Certificate" label="Certificate" accept="image/*,application/pdf" multiple={true}>
                <FileField source="src" title="Certificate" />
            </FileInput>
            <NumberInput source="Phone" label="Phone" />
            <DateInput source="DOB" label="Date of Birth" />
        </CustomSimpleForm>
    </Edit>
);

// ------------------------------------------------------------------
// Applicants Create View
// ------------------------------------------------------------------
export const ApplicantCreate = (props) => (
    <Create {...props} sx={commonStyles}>
        <CustomSimpleForm validate={validateApplicant}>
            <TextInput source="Name" label="Name" validate={required()} />
            <TextInput source="Surname" label="Surname" validate={required()} />
            <SelectInput
                source="Sex"
                label="Sex"
                choices={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' },
                    { id: 'Other', name: 'Other' },
                ]}
                validate={required()}
            />
            <SelectInput 
                source="Assessement_Type" 
                label="Assessement Type"
                choices={[
                    { id: 'Assignment', name: 'Assignment' },
                    { id: 'A1', name: 'A1' },
                    { id: 'A2', name: 'A2' },
                    { id: 'A3', name: 'A3' },
                    { id: 'Quiz', name: 'Quiz' },
                ]}
                validate={required()}
            />
            <NumberInput source="Weight" label="Weight" />
            <FileInput source="Matric_Report" label="Matric Report" accept="image/*,application/pdf">
                <FileField source="src" title="Matric Report" />
            </FileInput>
            <FileInput source="Certificate" label="Certificate" accept="image/*,application/pdf" multiple>
                <FileField source="src" title="Certificate" />
            </FileInput>
            <NumberInput source="Phone" label="Phone" />
            <DateInput source="DOB" label="Date of Birth" />
        </CustomSimpleForm>
    </Create>
);

// ========================
// Assessments Resource
// Fields: Student_ID (relation to Students), Mark (number), Module_Name (relation to Modules)
// ========================
export const AssessmentList = (props) => (
    <List {...props} sx={commonStyles}>
        <Datagrid rowClick="show" sx = {dataGridStyle}>
            <ReferenceField source="Student_ID" reference="students" label="Student">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="Mark" label="Mark" />
            <ReferenceField source="Module_Name" reference="modules" label="Module">
                <TextField source="Module_Name" />
            </ReferenceField>
            <TextField source="Assessement_Type" label="Assessement_Type">
            Assessement_Type
            </TextField>
            <TextField source="Weight" label="Weight">
            Weight
            </TextField>
        </Datagrid>
    </List>
);

export const AssessmentCreate = (props) => (
    <Create {...props} sx={commonStyles}>
        <SimpleForm>
            <ReferenceInput source="Student_ID" reference="students" label="Student">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="Mark" label="Mark" />
            <ReferenceInput source="Module_Name" reference="modules" label="Module">
                <SelectInput optionText="Module_Name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const AssessmentEdit = (props) => (
    <Edit {...props} sx={commonStyles}>
        <SimpleForm>
            <ReferenceInput source="Student_ID" reference="students" label="Student">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="Mark" label="Mark" />
            <ReferenceInput source="Module_Name" reference="modules" label="Module">
                <SelectInput optionText="Module_Name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const AssessmentShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <ReferenceField source="Student_ID" reference="students" label="Student">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="Mark" label="Mark" />
            <ReferenceField source="Module_Name" reference="modules" label="Module">
                <TextField source="Module_Name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

// ========================
// Course Resource
// Fields: Course_Name (text), Course_Duration (text)
// ========================
export const CourseList = (props) => (
    <List {...props} sx={commonStyles}>
        <Datagrid rowClick="show" sx={dataGridStyle}>
            <TextField source="Course_Name" label="Course Name" />
            <TextField source="Course_Duration" label="Course Duration" />
        </Datagrid>
    </List>
);

export const CourseCreate = (props) => (
    <Create {...props}> sx={commonStyles}
        <SimpleForm>
            <TextInput source="Course_Name" label="Course Name" />
            <TextInput source="Course_Duration" label="Course Duration" />
        </SimpleForm>
    </Create>
);

export const CourseEdit = (props) => (
    <Edit {...props} sx={commonStyles}>
        <SimpleForm>
            <TextInput source="Course_Name" label="Course Name" />
            <TextInput source="Course_Duration" label="Course Duration" />
        </SimpleForm>
    </Edit>
);

export const CourseShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <TextField source="Course_Name" label="Course Name" />
            <TextField source="Course_Duration" label="Course Duration" />
        </SimpleShowLayout>
    </Show>
);

// ========================
// Lecturers Resource
// Fields: Modules (relation to Modules - multiple), lecturer_name (relation to Users)
// ========================
export const LecturerList = (props) => (
    <List {...props} sx={commonStyles}>
        <Datagrid rowClick="show" sx={dataGridStyle}>
            <ReferenceArrayField label="Modules" source="Modules" reference="modules">
                <SingleFieldList>
                    <ChipField source="Module_Name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceField label="Lecturer Name" source="lecturer_name" reference="users">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const LecturerCreate = (props) => (
    <Create {...props} sx={commonStyles}>
        <SimpleForm>
            <ReferenceArrayInput label="Modules" source="Modules" reference="modules">
                <SelectArrayInput optionText="Module_Name" />
            </ReferenceArrayInput>
            <ReferenceInput label="Lecturer Name" source="lecturer_name" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const LecturerEdit = (props) => (
    <Edit {...props} sx={commonStyles}> 
        <SimpleForm>
            <ReferenceArrayInput label="Modules" source="Modules" reference="modules">
                <SelectArrayInput optionText="Module_Name" />
            </ReferenceArrayInput>
            <ReferenceInput label="Lecturer Name" source="lecturer_name" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const LecturerShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <ReferenceArrayField label="Modules" source="Modules" reference="modules">
                <SingleFieldList>
                    <ChipField source="Module_Name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceField label="Lecturer Name" source="lecturer_name" reference="users">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

// ========================
// Modules Resource
// Fields: Module_Name (text), Course_Name (relation to Course),
//         Module_Credits (text), Module_Code (text), Lecturer_Name (relation to Lecturers)
// ========================
export const ModuleList = (props) => (
    <List {...props} sx={commonStyles}>
        <Datagrid rowClick="show" sx={dataGridStyle}>
            <TextField source="Module_Name" label="Module Name" />
            <ReferenceField label="Course Name" source="Course_Name" reference="course">
                <TextField source="Course_Name" />
            </ReferenceField>
            <TextField source="Module_Credits" label="Module Credits" />
            <TextField source="Module_Code" label="Module Code" />
            <ReferenceField label="Lecturer" source="Lecturer_Name" reference="lecturers">
                <TextField source="lecturer_name" />
            </ReferenceField>


            
        </Datagrid>
    </List>
);

export const ModuleCreate = (props) => (
    <Create {...props} sx={commonStyles}>
        <SimpleForm>
            <TextInput source="Module_Name" label="Module Name" />
            <ReferenceInput label="Course Name" source="Course_Name" reference="course">
                <SelectInput optionText="Course_Name" />
            </ReferenceInput>
            <TextInput source="Module_Credits" label="Module Credits" />
            <TextInput source="Module_Code" label="Module Code" />s
            <ReferenceInput label="Lecturer" source="Lecturer_Name" reference="Lecturers">
                <SelectInput optionText="lecturer_name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const ModuleEdit = (props) => (
    <Edit {...props} sx={commonStyles}>
        <SimpleForm>
            <TextInput source="Module_Name" label="Module Name" />
            <ReferenceInput label="Course Name" source="Course_Name" reference="course">
                <SelectInput optionText="Course_Name" />
            </ReferenceInput>
            <TextInput source="Module_Credits" label="Module Credits" />
            <TextInput source="Module_Code" label="Module Code" />
            <ReferenceInput label="Lecturer" source="Lecturer_Name" reference="lecturers">
                <SelectInput optionText="lecturer_name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ModuleShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <TextField source="Module_Name" label="Module Name" />
            <ReferenceField label="Course Name" source="Course_Name" reference="course">
                <TextField source="Course_Name" />
            </ReferenceField>
            <TextField source="Module_Credits" label="Module Credits" />
            <TextField source="Module_Code" label="Module Code" />
            <ReferenceField label="Lecturer" source="Lecturer_Name" reference="lecturers">
                <TextField source="lecturer_name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

// ========================
// Students Resource
// Fields: name (text), surname (text), email (email), StudentNumber (number)
// ========================
export const StudentList = (props) => (
    <List {...props}sx={commonStyles}>
        <Datagrid rowClick="show" sc={dataGridStyle}>
            <TextField source="name" label="Name" />
            <TextField source="surname" label="Surname" />
            <EmailField source="email" label="Email" />
            <NumberField source="StudentNumber" label="Student Number" />
        </Datagrid>
    </List>
);

export const StudentCreate = (props) => (
    <Create {...props} sx={commonStyles}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="surname" label="Surname" />
            <NumberInput source="StudentNumber" label="Student Number" />
        </SimpleForm>
    </Create>
);

export const StudentEdit = (props) => (
    <Edit {...props} sx={commonStyles}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="surname" label="Surname" />
            <NumberInput source="StudentNumber" label="Student Number" />
        </SimpleForm>
    </Edit>
);

export const StudentShow = (props) => (
    <Show {...props} sx={commonStyles}>
        <SimpleShowLayout>
            <TextField source="name" label="Name" />
            <TextField source="surname" label="Surname" />
            <EmailField source="email" label="Email" />
            <NumberField source="StudentNumber" label="Student Number" />
        </SimpleShowLayout>
    </Show>
);
