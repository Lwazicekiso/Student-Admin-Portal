import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const RoleList = () => (
    <List>
        <Datagrid>
            <TextField source="Role" />
            <ReferenceField source="collectionId" reference="collections" />
            <TextField source="collectionName" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);