import Header from './components/Includes/Header/Header'
import Main from './pages/Main'
import Inbox from './pages/Inbox'
import Explore from './pages/Explore'
import User from './pages/User'
import Stories from './pages/Stories'
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

  const DefaultPage = () => {
    return(
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
          <Route path="/user/:id">
            <User/>
          </Route>
          <Route path="/stories">
            <Stories/>
          </Route>
        </Switch>
      </Default>
    );
  }

  const AuthPage = () => {
    return(
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
      </Auth>
    );
  }
  
  return (
    <div>
      <Loader/>
      { isLoggedIn ? <DefaultPage/> : <AuthPage/> }
    </div>
  );
}

export default App;