import Header from './components/Includes/Header/Header'
import Main from './pages/Main'
import Inbox from './pages/Inbox'
import Explore from './pages/Explore'
import User from './pages/User'
import LogIn from './components/Auth/LogIn'
import Default from './components/layouts/Default'
import Auth from './components/layouts/Auth'
import ViewAll from './components/Post/ViewAll/ViewAll'
import { Route,Switch } from 'react-router-dom'
import Loader from './components/Loader/Loader'

import { useEffect,useState } from 'react'
import { useUser } from './utils/useUser'
import Register from './components/Auth/Register'

function App() {

  // const state = useSelector(state => state.loggedIn)
  // const [loggedIn,setLoggedIn] = useState(false); 
  

  const data = useUser();

  

  // useEffect(() => {
  //   if(state){
  //     setLoggedIn(true);
  //   }
  // },[state])


  // const [state,setState] = useState(false);
  // const state = false;
  // function show(){
  //   setState(!state);
  // }
  
  return (
    <div>
      <Loader/>
      {data?.isLoggedIn ?
      <Default>
        <Header/>
        <ViewAll/>
        <Switch>
          <Route path="/" exact>
            <Main/>
          </Route>
          <Route path="/inbox">
            <Inbox/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
        </Switch>
      </Default>
      :
      <Auth>
        <Route path="/" exact> 
          <LogIn/>
        </Route>
        <Route path="/login"> 
          <LogIn/>
        </Route>
        <Route path="/register"> 
          <Register/>
        </Route>
      </Auth>}
    </div>
  );
}

export default App;