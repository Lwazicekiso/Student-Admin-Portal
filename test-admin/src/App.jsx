import './App.css';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  ListActions,

} from "react-admin";

// The admin screen component MyAdmin will be rendered later along with other components 
//import MyAdmin from './Admin/MyAdmin';

import { ModuleList,ModuleEdit,ModuleCreate,ModuleShow } from './Lists/ModuleList';
import {StudentList, StudentEdit , StudentCreate, StudentShow} from './Lists/StudentsList';
import {ApplicantList,ApplicantEdit,ApplicantCreate,ApplicantShow} from './Lists/ApplicantList';
import {CourseList,CourseEdit,CourseCreate, CourseShow} from "./Lists/CourseList";
import { LecturerList, LecturerEdit, LecturerCreate, LecturerShow } from './Lists/Lecturer'; // Import the components
import { RoleList,RoleEdit,RoleCreate,RoleShow } from './Lists/Role';
import { AssessmentList, AssessmentCreate,AssessmentShow, AssessmentEdit} from './Lists/AssessmentList';

import {PocketBaseProvider} from './ra-pocketbase';
//import { dataProvider } from './dataProvider';

const apiUrl = 'https://zany-cod-9pwwrw97w7vh769-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;
function App() {

    // Data provider for React Admin
   

    return (
      <Admin
      dataProvider={dataProvider}
  >

          <Resource
            name="Students"
            list={StudentList}
            edit={StudentEdit}
            show={StudentShow}
            create={StudentCreate}
          />
          
          <Resource
            name="Course"
            list={CourseList}
            edit={CourseEdit}
            show={CourseShow}
            create={CourseCreate}


          />
          
          <Resource
            name="Applicant"
            list={ApplicantList}
            edit={ApplicantEdit}
            show={ApplicantShow}
            create={ApplicantCreate}

          />
          <Resource
            name="Module"
            list={ModuleList}
            edit={ModuleEdit}
            show={ModuleShow}
            create={ModuleCreate}

          />
<Resource
            name="Assessment"
            list={AssessmentList}
            edit={AssessmentEdit}
            show={AssessmentShow}
            create={AssessmentCreate}
          />

<Resource
    name="Lecturer"
    list={LecturerList}
    edit={LecturerEdit}
    create={LecturerCreate}
    show={LecturerShow}
/>

          <Resource
            name="Role"
            list={RoleList}
            edit={RoleEdit}
            show={RoleShow}
            create={RoleCreate}

          />

          
        </Admin>
    );

    
}

export default App;
