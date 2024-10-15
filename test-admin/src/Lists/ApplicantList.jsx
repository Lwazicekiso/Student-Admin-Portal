import { BooleanField, Datagrid, DateField, List, TextField, 
    Edit, SimpleForm, TextInput, BooleanInput, DateInput, Create,
    Show, SimpleShowLayout



} from 'react-admin';

export const ApplicantList = () => (
    <List>
        <Datagrid>
            <DateField source="Application" />
            <TextField source="Name" />
            <BooleanField source="Status" />
            <TextField source="Surname" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);


import { } from 'react-admin';

export const ApplicantEdit = () => (
    <Edit>
        <SimpleForm>
            <DateInput source="Application" label="Application Date" />
            <TextInput source="Name" />
            <TextInput source="Surname" />
            <BooleanInput source="Status" />
        </SimpleForm>
    </Edit>
);


export const ApplicantCreate = () => (
    <Create>
        <SimpleForm>
            <DateInput source="Application" label="Application Date" />
            <TextInput source="Name" />
            <TextInput source="Surname" />
            <BooleanInput source="Status" />
        </SimpleForm>
    </Create>
);


export const ApplicantShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="Application" label="Application Date" />
            <TextField source="Name" />
            <TextField source="Surname" />
            <BooleanField source="Status" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);
