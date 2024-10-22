import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyLogin from './MyComponents/MyLogin.jsx';
import MyAdmin from './MyComponents/MyAdmin.jsx';
import MyStaff from './MyComponents/MyStaff.jsx';
import MyStudent from './MyComponents/MyStudent.jsx';
import ApplicantForm from './MyComponents/ApplicantPage.jsx'

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route index path="/" element={<MyLogin/>} />
        <Route path="/admin" element={<MyAdmin/>} />
        <Route path="/staff" element={<MyStaff/>} />
        <Route path="/student" element={<MyStudent/>} />
        <Route path="/applicant" element={<ApplicantForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
import { ModuleList } from './ModuleList';
import {StudentList} from './StudentsList';
import {ApplicantList} from './ApplicantList';
import {CourseList} from "./CourseList";
import { LecturerList } from './Lecturer';
import { RoleList } from './Role';
import PocketBase from 'pocketbase';  



// Initialize PocketBase API
const pb = new PocketBase('https://psychic-palm-tree-r4g66qpgq4gxcp55p-8090.app.github.dev');

function App() {

    // Data provider for React Admin
    const dataProvider = {
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

    return (
        <Admin
          dataProvider={dataProvider}
        >

          <Resource
            name="Students"
            list={StudentList}
            edit={EditGuesser}
            show={ShowGuesser}
          />
          
          <Resource
            name="Course"
            list={CourseList}
            edit={EditGuesser}
            show={ShowGuesser}
          />
          
          <Resource
            name="Applicant"
            list={ApplicantList}
            edit={EditGuesser}
            show={ShowGuesser}
          />
          <Resource
            name="Module"
            list={ModuleList}
            edit={EditGuesser}
            show={ShowGuesser}
          />

          <Resource
            name="Lecturer"
            list={LecturerList}
            edit={EditGuesser}
            show={ShowGuesser}
          />

          <Resource
            name="Role"
            list={RoleList}
            edit={EditGuesser}
            show={ShowGuesser}
          />

          <Resource
            name="Assesment"
            list={ListGuesser}
            edit={EditGuesser}
            show={ShowGuesser}
          />


          
        </Admin>
    );
}
=======
const App = () => (
  <>
  <MyAdmin/>
  </>
);
>>>>>>> 606b8e9ca190bdfd38a9a8162bfa2ab5430410fe

export default App;
=======
export default App;
>>>>>>> 007688f7355ccd2be819f03147c069d56a77da5a
