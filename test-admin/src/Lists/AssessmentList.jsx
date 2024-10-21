import { Datagrid, Filter, NumberField, Edit, Create, SimpleForm, NumberInput, List, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin';
import {dataGridStyle} from './ListStyle'


export const AssessmentList = () => (
    <List filters={<AssessmentFilter />}
        sx={{ 
            marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
        }}
    >
        <Datagrid
        sx={dataGridStyle}
        >
            <NumberField source="Mark" />
            <TextField source="Name" label="Module Name" />
            <TextField source="StudentNumber" />
            <TextField source="Status"/>
            <TextField source="id" />
        </Datagrid>
    </List>
);

export const AssessmentFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Module Name" source="Module_Name" /> 
    </Filter>
);

export const AssessmentShow = () => (
    <Show    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleShowLayout>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);

export const AssessmentEdit = () => (
    <Edit    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleForm>
            <NumberField source="Mark" />
            <TextField source="Module_Name" />
            <TextField source="StudentID" />
        </SimpleForm>
    </Edit>
);

export const AssessmentCreate = () => (
    <Create    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}>
        <SimpleForm>
            <NumberInput source="Mark" />
            <TextInput source="Module_Name" />
            <TextInput source="StudentID" />
        </SimpleForm>
    </Create>
);
