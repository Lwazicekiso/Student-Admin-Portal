import { Datagrid, Edit, Create, Filter, SimpleForm, DateField, List, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin';
// Define the CourseFilter component, accepting props
export const CourseFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by course name" source="Name" alwaysOn />
    </Filter>
);

// Define the CourseList component with the filters
export const CourseList = () => (
    <List filters={<CourseFilter />}
    sx={{ 
        marginTop: '150px', // Adjust to prevent overlap with the AppBar (200px height + marginBottom)
    }}
    > 
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
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
