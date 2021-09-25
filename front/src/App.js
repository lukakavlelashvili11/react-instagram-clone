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
import { useSelector } from 'react-redux' 

function App() {

  const state = useSelector(state => state.loggedIn)

  // const [state,setState] = useState(false);
  // const state = false;
  // function show(){
  //   setState(!state);
  // }
  
  return (
    <div>
      {state ?
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
        <LogIn/>
      </Auth>}
    </div>
  );
}

export default App;