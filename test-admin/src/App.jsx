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

function App() {
  

    // Data provider for React Admin
    return(
      <>
          <MyAdmin /> 
      </>

    )

    
}

export default App;
