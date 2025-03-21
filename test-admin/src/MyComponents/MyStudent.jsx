import { Admin,Resource} from "react-admin";
import StudentLayout from "./MyLayouts/StudentLayout";
import {PocketBaseProvider} from '../student-pocketbase';
import { 
    AssessmentList, AssessmentCreate, AssessmentEdit, AssessmentShow,
    CourseList, CourseCreate, CourseEdit, CourseShow,
    ModuleList, ModuleCreate, ModuleEdit, ModuleShow,
} from './Lists/StudentsList';

const apiUrl = 'https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;

const MyStudent = () => {
    return (
        <Admin 
        dataProvider={dataProvider}
//        authProvider={authProvider}
        layout={StudentLayout}>
            <Resource name="Assessments" list={AssessmentList} edit={AssessmentEdit} show={AssessmentShow}
                create={AssessmentCreate}
            />
                <Resource name="Assessments" list={AssessmentList} create={AssessmentCreate} edit={AssessmentEdit} show={AssessmentShow} />
                <Resource name="Course" list={CourseList} create={CourseCreate} edit={CourseEdit} show={CourseShow} />
                <Resource name="Modules" list={ModuleList} create={ModuleCreate} edit={ModuleEdit} show={ModuleShow} />
        
        </Admin>
    );
};

export default MyStudent;
