import { 
    AssessmentList, AssessmentCreate, AssessmentEdit, AssessmentShow,
    CourseList, CourseCreate, CourseEdit, CourseShow,
    ModuleList, ModuleCreate, ModuleEdit, ModuleShow,
    StudentList, StudentCreate, StudentEdit, StudentShow,
    ApplicantList, ApplicantCreate, ApplicantEdit, ApplicantShow,
    LecturerList, LecturerCreate, LecturerEdit, LecturerShow
} from './Lists/Lists.jsx';
import { Admin,Resource} from "react-admin";
import AdminLayout from "./MyLayouts/AdminLayout";
import {PocketBaseProvider} from '../ra-pocketbase';


const apiUrl = 'https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;


export const MyAdmin = () => (
    <Admin dataProvider={dataProvider} layout={AdminLayout} >
        <Resource name="applicants" list={ApplicantList} create={ApplicantCreate} edit={ApplicantEdit} show={ApplicantShow} />
        <Resource name="assessments" list={AssessmentList} create={AssessmentCreate} edit={AssessmentEdit} show={AssessmentShow} />
        <Resource name="course" list={CourseList} create={CourseCreate} edit={CourseEdit} show={CourseShow} />
        <Resource name="lecturers" list={LecturerList} create={LecturerCreate} edit={LecturerEdit} show={LecturerShow} />
        <Resource name="modules" list={ModuleList} create={ModuleCreate} edit={ModuleEdit} show={ModuleShow} />
        <Resource name="students" list={StudentList} create={StudentCreate} edit={StudentEdit} show={StudentShow} />
    </Admin>
);
export default MyAdmin;
