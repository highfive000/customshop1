import React from 'react';
import './App.css';
import Body from './Body.js'
import SearchTool from './tools/searchtool.js'
import Category from './Category.js';
import Product from './Product.js';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {

	
	
  return (
    <div className="App">
      <header className="App-header">
		<span className="logo">Shoopping</span>
		
		
		
		<SearchTool />
		<div className="topMenu">
			<span className="navibar">

				<span className="cat"><a href="/home">Home</a></span>
				<span className="cat"><a href="/category/shoes">Shoes</a></span>
				<span className="cat"><a href="/category/tshirts">T-Shirts</a></span>
				<span className="cat"><a href="/category/pants">Pants</a></span>
			</span>
			
			
			
			<span className="cart">
				<img src={require("./img/cart2.png")}></img>
			</span>
		
		
		</div>
		
		
		
		
      </header>
	  
	  
		<Router>
			<Switch>
			  <Route path="/home">
				<Body />
			  </Route>
			  <Route path="/category">
				<Category />
			  </Route>
			  <Route path="/product">
				<Product />
			  </Route>
			</Switch>
		</Router>
	  
	  <div className="footer">

	  
	  </div>
	  
	  
	  

	 
		
	  
	  
    </div>
  );
}

export default App;
