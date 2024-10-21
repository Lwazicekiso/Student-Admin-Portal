import {
    Datagrid,
    Filter,
    AutocompleteInput,
    NumberField,
    Edit,
    Create,
    SimpleForm,
    NumberInput,
    List,
    Show,
    SimpleShowLayout,
    TextField,
    TextInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    required,
    minValue,
    maxValue,
} from 'react-admin';
import { dataGridStyle } from './ListStyle';

// Custom NumberField with percentage formatting
const PercentageField = ({ source }) => (
    <NumberField 
        source={source} 
        options={{ style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 2 }} 
        transform={(value) => value / 100}  // Convert number to percentage
    />
);

export const AssessmentList = () => (
    <List filters={<AssessmentFilter />}
        sx={{
            marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
        }}
    >
        <Datagrid sx={dataGridStyle}>
            {/* Display Mark as a percentage */}
            <PercentageField source="Mark" />

            <ReferenceField source="Module_Name" reference="Module">
                <TextField source="name" />
            </ReferenceField>

            <ReferenceField source="Module_Code" reference="Module">
                <TextField source="course_code" />
            </ReferenceField>

            <ReferenceField source="StudentNumber" reference="Students">
                <TextField source="StudentNumber" />
            </ReferenceField>

            <TextField source="Status" />
        </Datagrid>
    </List>
);

export const AssessmentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Module Name" source="Module_Name" />
    </Filter>
);

export const AssessmentShow = () => (
    <Show sx={{ marginTop: '150px' }}>
        <SimpleShowLayout>
            {/* Display Mark as a percentage */}
            <PercentageField source="Mark" />

            {/* Module Name */}
            <ReferenceField source="Module_Name" reference="Module">
                <TextField source="name" />
            </ReferenceField>

            {/* Student Number */}
            <ReferenceField source="StudentNumber" reference="Students">
                <TextField source="StudentNumber" />
            </ReferenceField>

            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);

// Edit Component
export const AssessmentEdit = () => (
    <Edit sx={{ marginTop: '150px' }}>
        <SimpleForm validate={validateAssessment}>
            {/* Input for Mark */}
            <NumberInput source="Mark" label="Mark (%)" validate={[required(), minValue(0)]} />

            {/* Module Name - ReferenceInput to select from Module collection */}
            <ReferenceInput source="Module_Name" reference="Module">
                <SelectInput optionText="name" label="Module Name" validate={required()} />
            </ReferenceInput>

            {/* Module Code - ReferenceInput to select the corresponding module code */}
            <ReferenceInput source="Module_Code" reference="Module">
                <SelectInput optionText="course_code" label="Module Code" validate={required()} />
            </ReferenceInput>

            {/* Student Number - ReferenceInput to select from Students collection */}
            <ReferenceInput source="StudentNumber" reference="Students">
                <SelectInput optionText="StudentNumber" label="Student Number" validate={required()} />
            </ReferenceInput>

            <TextInput source="Status" validate={required()} />
        </SimpleForm>
    </Edit>
);

// Create Component
export const AssessmentCreate = () => (
    <Create sx={{ marginTop: '150px' }}>
        <SimpleForm validate={validateAssessment}>
            {/* Input for Mark as a percentage */}
            <NumberInput source="Mark" label="Mark (%)" validate={[required(), minValue(1),maxValue(100)]} />

            {/* Module Name - ReferenceInput to select from Module collection */}
            <ReferenceInput source="Module_Name" reference="Module">
                <SelectInput optionText="name" label="Module Name" validate={required()} />
            </ReferenceInput>

            {/* Module Code - ReferenceInput to select the corresponding module code */}
            <ReferenceInput source="Module_Code" reference="Module">
                <SelectInput optionText="course_code" label="Module Code" validate={required()} />
            </ReferenceInput>

            {/* Student Number - AutocompleteInput for typing and selecting student number */}
            <ReferenceInput source="StudentNumber" reference="Students">
                <AutocompleteInput optionText="StudentNumber" label="Student Number" validate={required()} />
            </ReferenceInput>

            {/* Status - Simple text input */}
            <SelectInput 
                source="Status" 
                label="Status" 
                choices={[
                    { id: 'fail', name: 'Fail' },
                    { id: 'pass', name: 'Pass' },
                    { id: 'pass_with_distinction', name: 'Pass with Distinction' },
                ]} 
                validate={required()} 
            />        </SimpleForm>
    </Create>
);

// Validation function for Assessment forms
const validateAssessment = (values) => {
    const errors = {};

    if (!values.Mark) {
        errors.Mark = 'Mark is required';
    } else if (values.Mark < 0) {
        errors.Mark = 'Mark must be greater than or equal to 0';
    }

    if (!values.Module_Name) {
        errors.Module_Name = 'Module Name is required';
    }

    if (!values.Module_Code) {
        errors.Module_Code = 'Module Code is required';
    }

    if (!values.StudentNumber) {
        errors.StudentNumber = 'Student Number is required';
    }

    if (!values.Status) {
        errors.Status = 'Status is required';
    }

    return errors;
};
