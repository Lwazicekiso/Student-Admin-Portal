import { StudentList, StudentEdit, StudentCreate, StudentShow } from '../Lists/StudentsList';
import { ApplicantList, ApplicantEdit, ApplicantShow } from '../Lists/ApplicantList';
import { AssessmentList, AssessmentCreate, AssessmentShow, AssessmentEdit } from '../Lists/AssessmentList';
import { Admin,Resource} from "react-admin";
import CustomLayout from "../CustomLayout";
import {PocketBaseProvider} from '../ra-pocketbase';


const apiUrl = 'https://organic-orbit-jx99v95jj6g2j6x7-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;
const MyAdmin = () => {
    return (
        <Admin dataProvider={dataProvider}
        authProvider={authProvider}
        layout={CustomLayout}>
            
            <Resource
                name="Students"
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
