import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from './users/pages/Users'
import NewPet from './pets/pages/NewPet'
import 'semantic-ui-css/semantic.min.css'
import MainNavigation from './shared/components/navigation/MainNavigation'
import UserPets from './pets/pages/UserPets';
import UpdatePet from './pets/pages/UpdatePet'
import Auth from './users/pages/Auth'
import AllPets from './pets/pages/AllPets'
import Homepage from './shared/homepage';
import PetId from './pets/pages/PetId';
import UserAuth from './users/UserAuth'
import Search from './pets/pages/Search'
import MyPets from './pets/pages/MyPets';






const App = () => {

  


  return (
    // <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
   <UserAuth>
    <Router>
      <MainNavigation/>
      <Switch>
      <Route path="/" exact>
        <Homepage/>
      
      </Route>
      <Route path="/:userId/pets" exact>
      <UserPets/> 
      </Route>

      <Route path="/pets" exact>
      <AllPets/>
      </Route>

      <Route path="/mypets" exact>
      <MyPets/>
      </Route>

      <Route path="/pet" exact>
      <PetId/>
      </Route>
    
      <Route path="/pets/new" exact>
        <NewPet/>
      </Route>
      <Route path="/pets/:petId">
        <UpdatePet/>
      </Route>
      <Route path="/auth">
        <Auth/>
      </Route>
      <Route path="/admin">
        <Users/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      
      
      <Redirect to="/" />
      </Switch>
    </Router>
  </UserAuth>
  
    // </AuthContext.Provider>
      
  )
}

export default App
