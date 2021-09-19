import Header from './components/Includes/Header/Header'
import Main from './pages/Main/Main'
import Inbox from './pages/Inbox/Inbox'
import Explore from './pages/Explore'
import LogIn from './components/Auth/LogIn'
import Default from './components/layouts/Default'
import Auth from './components/layouts/Auth'
import { Route,Switch } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux' 
import { register } from './store/actions'

function App() {

  const state = useSelector(state => state.loggedIn)
  const dispatch = useDispatch();

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
        </Switch>
      </Default>
      :
      <Auth>
        {state ? 'true' : 'false'}
        <button onClick={() => dispatch(register())}>click</button>
        <LogIn/>
      </Auth>}
    </div>
  );
}

export default App;