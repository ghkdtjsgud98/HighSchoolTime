import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import App from './App';
import Register from './Register';
import Home from './Home';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path ="/" component={App}/>
                    <Route exact path ="/Register" component={Register}/>
                    <Route exact path ="/Home" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;