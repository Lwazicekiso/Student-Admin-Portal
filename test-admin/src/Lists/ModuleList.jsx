import { 
    Datagrid, 
    DateField, 
    List, 
    NumberField, 
    TextField, 
    Edit, 
    Create, 
    Show, 
    SimpleForm, 
    SimpleShowLayout, 
    TextInput 
} from 'react-admin';

export const ModuleList = () => (
    <List>
        <Datagrid>
            <NumberField source="Credits" />
            <TextField source="Name" />
            <NumberField source="Year_level" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

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
