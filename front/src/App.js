import Header from './components/Includes/Header/Header'
import Main from './pages/Main'
import Inbox from './pages/Inbox'
import Explore from './pages/Explore'
import { Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;