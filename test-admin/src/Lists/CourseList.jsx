import { Datagrid, Edit, Create, SimpleForm,DateField, List, Show, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';

export const CourseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);


export const CourseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Name" />
        </SimpleForm>
    </Edit>
);


export const CourseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Name" />
        </SimpleForm>
    </Create>
);


export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="ID" />
            <TextField source="Name" label="Course Name" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);
