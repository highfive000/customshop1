import React,{Component} from 'react';
import './product.css';



class Product extends Component{
	constructor(){
		super()
	}
	
	
	render(){
		return(
			<div className="Item">
				<div className="itemPhoto">
				
				
				</div>
				<div className="itemInfo">
					Nike shoes
				
				</div>
			
			</div>
		)
	}
	
}

export default Product