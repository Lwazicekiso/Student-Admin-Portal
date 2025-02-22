import { StudentList, StudentEdit, StudentCreate, StudentShow } from './Lists/StudentsList';
import { ApplicantList, ApplicantEdit,ApplicantCreate, ApplicantShow } from './Lists/ApplicantList';
import { AssessmentList, AssessmentCreate, AssessmentShow, AssessmentEdit } from './Lists/AssessmentList';
import { Admin,Resource} from "react-admin";
import AdminLayout from "./MyLayouts/AdminLayout";
import {PocketBaseProvider} from '../ra-pocketbase';


const apiUrl = 'https://cuddly-succotash-7gww6w9vpg6cq4-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;

const MyAdmin = () => {
    return (
        <Admin 
        dataProvider={dataProvider}
        authProvider={authProvider}
        layout={AdminLayout}>
            
            <Resource
                name="Students_old"
                list={StudentList}
                edit={StudentEdit}
                show={StudentShow}
                create={StudentCreate}
                
            />
            <Resource
                name="Applicant"
                list={ApplicantList}
                edit={ApplicantEdit}
                show={ApplicantShow}
                create={ApplicantCreate}
            />
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

export default MyAdmin;
