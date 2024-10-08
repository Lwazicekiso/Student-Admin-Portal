import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const StudentList = () => (
    <List>
        <Datagrid>
            <DateField source="created" />
            <TextField source="fname" />
            <TextField source="id" />
            <TextField source="sname" />
            <NumberField source="studentID" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);