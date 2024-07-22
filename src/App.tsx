import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Exercise1 } from './infraestructure/ui/Exercise1';
import { Exercise2 } from './infraestructure/ui/Exercise2';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Exercise1 />
            </Route>
            <Route exact path="/simple-range">
                <Exercise1 />
            </Route>
            <Route exact path="/fixed-range">
                <Exercise2 />
            </Route>
        </Switch>
    </Router>
  )
}

export default App;
