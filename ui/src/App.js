import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InnerApp from './components/App.js';
import Content from './components/content.js';
import Edit from './components/edit.js';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={InnerApp} />
		    		<Route exact path='/videos' component={Content} />			
                    <Route path='/videos/edit' component={Edit} />
                </Switch>
            </Router>			
        );
    }
}

export default App;
