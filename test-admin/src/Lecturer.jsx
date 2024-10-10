import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const LecturerList = () => (
    <List>
        <Datagrid>
            <TextField source="Module_1" />
            <TextField source="Module_2" />
            <TextField source="Module_3" />
            <TextField source="Names" />
            <TextField source="Surname" />
            <TextField source="Title" />
            <ReferenceField source="collectionId" reference="collections" />
            <TextField source="collectionName" />
            <DateField source="created" />
            <BooleanField source="emailVisibility" />
            <TextField source="id" />
            <DateField source="updated" />
            <TextField source="username" />
            <BooleanField source="verified" />
        </Datagrid>
    </List>
);