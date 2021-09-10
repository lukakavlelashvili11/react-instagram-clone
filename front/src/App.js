import Header from './components/Includes/Header/Header'
import Main from './pages/Main/Main'
import Inbox from './pages/Inbox'
import Explore from './pages/Explore'
import LogIn from './components/Auth/LogIn'
import Default from './components/layouts/Default'
import Auth from './components/layouts/Auth'
import { Route,Switch } from 'react-router-dom'

function App() {

  const state = false;
  
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
        <LogIn/>
      </Auth>}
    </div>
  );
}

export default App;