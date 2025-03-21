import { 
    Datagrid, 
    DateField, 
    List, 
    NumberField, 
    TextField, 
    Edit, 
    Create, 
    Filter,
    Show, 
    SimpleForm, 
    SimpleShowLayout, 
    TextInput, 
    NumberInput 
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

export const ModuleList = () => (
    <List filters={<ModuleFilter />}
    sx={{commonStyles // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <Datagrid sx={dataGridStyle}>
            <NumberField source="Credits" />
            <TextField source="Name" />
            <NumberField source="Year_level" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);


export const ModuleFilter= (props)=> (
    <Filter {...props}>
        <TextInput label="Search by module name" source="Name" alwaysOn />
        <NumberInput label="Search by year level" source="Year_level" />
        <NumberInput label="Search credit amount" source='Credits'/> 
    </Filter>
)

export const ModuleEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="Credits" />
            <TextInput source="Name" />
            <NumberField source="Year_level" />
        </SimpleForm>
    </Edit>
);

export const ModuleCreate = () => (
    <Create>
        <SimpleForm>
            <NumberField source="Credits" />
            <TextInput source="Name" />
            <NumberField source="Year_level" />
        </SimpleForm>
    </Create>
);

export const ModuleShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="Credits" label="Credits" />
            <TextField source="Name" label="Name" />
            <NumberField source="Year_level" label="Year Level" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
            <TextField source="id" label="ID" />
        </SimpleShowLayout>
    </Show>
);
