import { Datagrid, Edit, Create, SimpleForm,DateField, List, Show, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';
import {Filter } from 'react-admin';


export const StudentList = () => (
    <List filters={<StudentFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="StudentID" />
            <DateField source="created" />
            <TextField source="name" />
            <TextField source="surname" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

const StudentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by name" source="name" alwaysOn />
        <TextInput label="Search by surname" source="surname" />
        <TextInput label="Search by student number" source="studentNumber" />
    </Filter>
);

export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="StudentID" />
            <TextInput source="name" />
            <TextInput source="surname" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="StudentID" />
            <TextInput source="name" />
            <TextInput source="surname" />
        </SimpleForm>
    </Create>
);


export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="ID" />
            <TextField source="StudentID" label="Student ID" />
            <TextField source="name" label="Name" />
            <TextField source="surname" label="Surname" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);

