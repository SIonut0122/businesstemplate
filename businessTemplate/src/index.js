import React 							  from 'react';
import ReactDOM 						  from 'react-dom';
import Home 							  from './components/Home';
import Contact 							  from './components/Contact';
import Services 						  from './components/Services';
import { Route, BrowserRouter as Router } from 'react-router-dom'
 

 const routing = (
  <Router>
    <div>
         <Route exact path={process.env.PUBLIC_URL + '/'} 		  component={Home}/>
		 <Route exact path={process.env.PUBLIC_URL + '/contact'}  component={Contact}/>
		 <Route exact path={process.env.PUBLIC_URL + '/services'} component={Services}/>
    </div>
  </Router>
)

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>{routing}</Router>, document.getElementById('root'));
