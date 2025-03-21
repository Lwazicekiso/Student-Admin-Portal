import { 
    Datagrid, DateField, List, TextField, TextInput, 
    Edit, Create, SimpleForm, Show, SimpleShowLayout 
} from 'react-admin';

export const dataGridStyle = {
    '& .RaDatagrid-headerCell': {
        padding: '16px',     // Header cells padding
        fontSize: '18px',     // Header font size
        color: '#4899ea',     // Header font color
    },
    '& .RaDatagrid-rowCell': {
        padding: '20px',      // Row cells padding
        marginRight: '100x',  // Right margin for row cells
        fontSize: '16px',      // Row font size
        width: '100%',
    },
};

export const commonStyles = {
    marginTop: '80px', // Adjust to prevent overlap with the AppBar
    color: 'blue',      // Global color for the resource
};

export const RoleList = () => (
    <List sx={commonStyles}>
        <Datagrid sx={dataGridStyle}>
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
