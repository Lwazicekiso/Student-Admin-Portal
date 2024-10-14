import { StudentList, StudentEdit, StudentCreate, StudentShow } from '../Lists/StudentsList';
import { ApplicantList, ApplicantEdit, ApplicantShow } from '../Lists/ApplicantList';
import { AssessmentList, AssessmentCreate, AssessmentShow, AssessmentEdit } from '../Lists/AssessmentList';

import { Admin,Resource} from "react-admin";
import { dataProvider } from "../App";

// Correctly define and export the admin component
const MyAdmin = () => {
    return (
        <Admin dataProvider={dataProvider}>
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
