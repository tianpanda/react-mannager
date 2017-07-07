// 入口文件index.js
import React from 'react'; 
import { render } from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import  './index.css';
 

import HomeLayout from './commponents/home/home';  
import User from './view/user/user'; 
import Video from './view/video/video'; 
import Updata from './view/updata/updata'; 





const router= <Router history={hashHistory}>

			    <Route path="/" component={HomeLayout}>
			        	<IndexRoute component={HomeLayout}/>
			        <Route path="/user" component={User}/> 
			        <Route path="/video" component={Video}/> 
			        <Route path="/updata" component={Updata}/> 
			    </Route>

			  </Router>

render(router, document.getElementById('root')); 
 