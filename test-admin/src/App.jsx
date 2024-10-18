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
import MyAdmin from './Admin/MyAdmin';

import {PocketBaseProvider} from './ra-pocketbase';
//import { dataProvider } from './dataProvider';

const apiUrl = 'https://organic-orbit-jx99v95jj6g2j6x7-8090.app.github.dev'; 

export const dataProvider = PocketBaseProvider(apiUrl).dataProvider;
export const authProvider = PocketBaseProvider(apiUrl).authProvider;
function App() {
  

    // Data provider for React Admin
    return(
      <>
          <MyAdmin /> 
      </>

    )

    
}

export default App;
