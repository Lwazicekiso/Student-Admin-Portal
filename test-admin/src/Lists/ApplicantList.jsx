import { BooleanField, Datagrid, DateField, List, TextField, 
    Edit, SimpleForm, TextInput, BooleanInput, DateInput,
    Show, SimpleShowLayout
} from 'react-admin';
import {dataGridStyle, commonStyles} from './ListStyle'

// Centralized common styles



export const ApplicantList = () => (
    <List
        sx={commonStyles} // Applying centralized margin and color
>
        <Datagrid sx={dataGridStyle}>
            <TextField sx={{padding:'15px'}} source="Name" label="Applicant Name" /> {/* Added label */}
            <TextField source="Surname" label="Last Name" /> {/* Added label */}
            <TextField source="id" label="Application ID" /> {/* Use label instead of title */}
            <BooleanField source="Acceptance" label="Status" />
        </Datagrid>
    </List>
);

export const ApplicantEdit = () => (
    <Edit sx={commonStyles}>
        <SimpleForm>
            <DateInput source="Application" label="Application Date" />
            <TextInput source="Name" label="First Name" />
            <TextInput source="Surname" label="Last Name" />
            <BooleanInput source="Status" label="Application Status" />
        </SimpleForm>
    </Edit>
);


export const ApplicantShow = () => (
    <Show sx={commonStyles}>
        <SimpleShowLayout>
            <DateField source="Application" label="Application Date" />
            <TextField source="Name" label="First Name" />
            <TextField source="Surname" label="Last Name" />
            <BooleanField source="Status" label="Application Status" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);
