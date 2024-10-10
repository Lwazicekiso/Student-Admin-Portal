import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const ApplicantList = () => (
    <List>
        <Datagrid>
            <DateField source="Application" />
            <TextField source="Name" />
            <BooleanField source="Status" />
            <TextField source="Surname" />
            <ReferenceField source="collectionId" reference="collections" />
            
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);