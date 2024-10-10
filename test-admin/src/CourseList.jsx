import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const CourseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);