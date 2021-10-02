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
import { useUser } from './utils/useUser'
import Register from './components/Auth/Register'

function App() {

  const { isLoggedIn } = useUser();
  
  return (
    <div>
      <Loader/>
      {isLoggedIn ?
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