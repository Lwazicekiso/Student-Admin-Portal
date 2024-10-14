import './App.css';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  ListActions,

} from "react-admin";

import MyAdmin from './Admin/MyAdmin';

import { ModuleList,ModuleEdit,ModuleCreate,ModuleShow } from './ModuleList';
import {StudentList, StudentEdit , StudentCreate, StudentShow} from './StudentsList';
import {ApplicantList,ApplicantEdit,ApplicantCreate,ApplicantShow} from './ApplicantList';
import {CourseList,CourseEdit,CourseCreate, CourseShow} from "./CourseList";
import { LecturerList, LecturerEdit, LecturerCreate, LecturerShow } from './Lecturer'; // Import the components
import { RoleList,RoleEdit,RoleCreate,RoleShow } from './Role';
import PocketBase from 'pocketbase';  
import { AssessmentList, AssessmentCreate,AssessmentShow, AssessmentEdit} from './AssessmentList';



// Initialize PocketBase API
const pb = new PocketBase('https://zany-cod-9pwwrw97w7vh769-8090.app.github.dev');

export const dataProvider = {
  getList: async (resource, params) => {
      // Debugging logs to see what parameters are passed
      console.log('Fetching list for resource:', resource);
      console.log('Params received by dataProvider:', params);

      try {
          const response = await pb.collection(resource).getList(
              params.pagination.page, // Extract the page number
              params.pagination.perPage, // Extract the number of records per page
              {
                  sort: params.sort ? `${params.sort.order === 'DESC' ? '-' : '+'}${params.sort.field}` : '-created', // Sorting logic
              }
          );
          
          console.log('Data fetched by dataProvider:', response);
          
          return {
              data: response.items.map(item => ({ ...item, id: item.id })), // Map items and include `id` for React Admin
              total: response.totalItems,
          };
      } catch (error) {
          console.error('Error in dataProvider getList:', error);
          throw error;
      }
  },
};

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
