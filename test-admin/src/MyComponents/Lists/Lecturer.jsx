import { BooleanField, Datagrid, DateField, List,  TextField ,
    Edit, SimpleForm, TextInput,  BooleanInput ,
    Create, Show, SimpleShowLayout
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
export const LecturerList = () => (
    <List
    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <Datagrid sx={dataGridStyle}>
            <TextField source="id" />
            <TextField source="username" /> 
            <TextField source="Names" />
            <TextField source="Surname" />
            <TextField source="Title" />
            <TextField source="Module_1" />
            <TextField source="Module_2" />
            <TextField source="Module_3" />
            <DateField source="created" />
            <DateField source="updated" />
            <BooleanField source="verified" />
        </Datagrid>
    </List>
);



export const LecturerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Module_1" />
            <TextInput source="Module_2" />
            <TextInput source="Module_3" />
            <TextInput source="Names" />
            <TextInput source="Surname" />
            <TextInput source="Title" />
            <TextInput source="username" />
            <BooleanInput source="verified" />
        </SimpleForm>
    </Edit>
);


  

export const LecturerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Module_1" />
            <TextInput source="Module_2" />
            <TextInput source="Module_3" />
            <TextInput source="Names" />
            <TextInput source="Surname" />
            <TextInput source="Title" />
            <TextInput source="username" />
            <BooleanInput source="verified" />
        </SimpleForm>
    </Create>
);



export const LecturerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="ID" />
            <TextField source="Module_1" label="Module 1" />
            <TextField source="Module_2" label="Module 2" />
            <TextField source="Module_3" label="Module 3" />
            <TextField source="Names" label="Names" />
            <TextField source="Surname" label="Surname" />
            <TextField source="Title" label="Title" />
            <TextField source="username" label="Username" />
            <BooleanField source="verified" label="Verified" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);
