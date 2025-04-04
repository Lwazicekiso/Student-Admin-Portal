import { 
    AssessmentList, AssessmentCreate, AssessmentEdit, AssessmentShow,
    CourseList,CourseShow,
    ModuleList, ModuleShow,
    StudentList, StudentCreate, StudentEdit, StudentShow
} from './Lists/Lists.jsx';
import { Admin,Resource} from "react-admin";
import LecturerLayout from "./MyLayouts/LecturerLayout.jsx";
import {PocketBaseProvider} from '../ra-pocketbase';


const apiUrl = 'https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;

export const MyLecturer = () => (
    <Admin dataProvider={dataProvider} layout={LecturerLayout} >
        <Resource name="Assessments" list={AssessmentList} create={AssessmentCreate} edit={AssessmentEdit} show={AssessmentShow} />
        <Resource name="Course" list={CourseList} show={CourseShow} />
        <Resource name="Modules" list={ModuleList} show={ModuleShow} />
        <Resource name="Students" list={StudentList} create={StudentCreate} edit={StudentEdit} show={StudentShow} />
    </Admin>
);
export default MyLecturer;
