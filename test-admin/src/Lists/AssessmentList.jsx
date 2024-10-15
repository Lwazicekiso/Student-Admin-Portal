import { Datagrid,Filter , NumberField,Edit, Create, SimpleForm,DateField, NumberInput,  List, Show, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';


export const AssessmentList = () => (
    <List filters={<AssessmentFilter />}>
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


export const AssessmentFilter = (props)=>(
    <Filter {...props}>
        <TextInput label='Search by Module_Name' source="Module_Name" /> 
    </Filter>
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
            <NumberInput source="Mark" />
            <TextInput source="Module_Name" />
            <TextInput source="StudentID" />
        </SimpleForm>
    </Create>
);
