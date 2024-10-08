import { Datagrid, DateField, List, NumberField,TextField } from 'react-admin';

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




