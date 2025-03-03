import { AssessmentList, AssessmentCreate, AssessmentShow, AssessmentEdit } from './Lists/AssessmentList';
import { Admin,Resource} from "react-admin";
import StudentLayout from "./MyLayouts/StudentLayout";
import {PocketBaseProvider} from '../student-pocketbase';


const apiUrl = 'https://musical-journey-97j7p7q4vqgv375gj-8090.app.github.dev/'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;
const MyStudent = () => {
    return (
        <Admin 
        dataProvider={dataProvider}
        authProvider={authProvider}
        layout={StudentLayout}>
            <Resource
                name="Assessment"
                list={AssessmentList}
                edit={AssessmentEdit}
                show={AssessmentShow}
                create={AssessmentCreate}
            />
        </Admin>
    );
};

export default MyStudent;
