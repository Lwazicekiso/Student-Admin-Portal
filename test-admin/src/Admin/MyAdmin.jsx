import { StudentList, StudentEdit, StudentCreate, StudentShow } from '../Lists/StudentsList';
import { ApplicantList, ApplicantEdit, ApplicantShow } from '../Lists/ApplicantList';
import { AssessmentList, AssessmentCreate, AssessmentShow, AssessmentEdit } from '../Lists/AssessmentList';
import { Admin,Resource} from "react-admin";
import CustomLayout from "../CustomLayout";
import {PocketBaseProvider} from './ra-pocketbase';

const pbProvider = PocketBaseProvider("https://musical-journey-97j7p7q4vqgv375gj.github.dev/")

const MyAdmin = () => {
    return (
<<<<<<< HEAD
        <Admin dataProvider={dataProvider}
        authProvider={authProvider}
=======
        <Admin 
        dataProvider={pbProvider.dataProvider}
        authProvider={pbProvider.authProvider}
>>>>>>> 8a373a69895119fc3b0a44a11e1d776efa7e207e
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
