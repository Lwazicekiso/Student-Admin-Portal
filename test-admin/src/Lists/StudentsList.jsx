import { Datagrid, Edit, Create, SimpleForm,DateField, List, Show,Toolbar, SimpleShowLayout ,TextField,  TextInput,ReferenceField  } from 'react-admin';
import {Filter } from 'react-admin';
import {dataGridStyle,commonStyles} from './ListStyle'


export const StudentList = () => (
    <List filters={<StudentFilter />} sx={{ ...commonStyles }}>
        <Datagrid sx={dataGridStyle}>
            <TextField source="id" />
            <TextField source="StudentNumber" />
            <TextField source="name" />
            <TextField source="surname" />
            {/* Fields for modules*/}
            <ReferenceField source="Module_1" reference="Module" label="Module 1">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="Module_2" reference="Module" label="Module 2">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="Module_3" reference="Module" label="Module 3">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);


const StudentFilter = (props) => (
    <Toolbar sx={{ justifyContent: 'center', width: '100%' }}>
        <Filter {...props} sx={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
            <TextInput label="Search by name" source="name" alwaysOn sx={{ width: '300px' }} />
            <TextInput label="Search by surname" source="surname" sx={{ width: '300px' }} />
            <TextInput label="Search by student number" source="studentNumber" sx={{ width: '300px' }} />
        </Filter>
    </Toolbar>
);
export const StudentEdit = () => (
    <Edit    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleForm>
            <TextInput source="StudentNumber" />
            <TextInput source="name" />
            <TextInput source="surname" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = () => (
    <Create    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleForm>
            <TextInput source="StudentID" />
            <TextInput source="name" />
            <TextInput source="surname" />
        </SimpleForm>
    </Create>
);


export const StudentShow = () => (
    <Show
    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleShowLayout>
            <TextField source="StudentNumber" label="Student Number" />
            <TextField source="name" label="Name" />
            <TextField source="surname" label="Surname" />
            <ReferenceField source="Module_1" reference="Module" label="Module 1">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="Module_2" reference="Module" label="Module 2">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="Module_3" reference="Module" label="Module 3">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);

