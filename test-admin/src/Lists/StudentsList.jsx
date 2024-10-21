import { Datagrid, Edit, Create, SimpleForm,DateField, List, Show,Toolbar, SimpleShowLayout ,TextField,  TextInput  } from 'react-admin';
import {Filter } from 'react-admin';
import {dataGridStyle,commonStyles} from './ListStyle'


export const StudentList = () => (
    <List filters={<StudentFilter />} sx={{ ...commonStyles }}>
        <Datagrid sx={dataGridStyle}>
            <TextField source="id" />
            <TextField source="StudentNumber" />
            <TextField source="name" />
            <TextField source="surname" />
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
            <TextField source="id" label="ID" />
            <TextField source="StudentID" label="Student ID" />
            <TextField source="name" label="Name" />
            <TextField source="surname" label="Surname" />
            <DateField source="created" label="Created Date" />
            <DateField source="updated" label="Last Updated" />
        </SimpleShowLayout>
    </Show>
);

