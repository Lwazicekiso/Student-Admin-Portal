import { 
    Datagrid, DateField, List, TextField, TextInput, 
    Edit, Create, SimpleForm, Show, SimpleShowLayout 
} from 'react-admin';

export const RoleList = () => (
    <List>
        <Datagrid>
            <TextField source="Role" />
            <TextField source="id" />
            <DateField source="updated" />
            <DateField source="created" />
        </Datagrid>
    </List>
);

export const RoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Role" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Role" />
        </SimpleForm>
    </Create>
);

export const RoleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="ID" />
            <TextField source="Role" label="Role" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);
