import { Datagrid, Edit, Create, SimpleForm,DateField, List, NumberField, Show, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';

export const StudentList = () => (
    <List>
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

