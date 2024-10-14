import { Datagrid, NumberField,Edit, Create, SimpleForm,DateField, List, Show, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';

export const AssessmentList = () => (
    <List>
        <Datagrid>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);



export const AssessmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
            <DateField source="created" />
            <TextField source="id" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);


export const AssessmentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
        </SimpleForm>
    </Edit>
);

export const AssessmentCreate = () => (
    <Create>
        <SimpleForm>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
        </SimpleForm>
    </Create>
);
