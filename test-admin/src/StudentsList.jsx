import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

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