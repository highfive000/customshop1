import React,{Component} from 'react';
import './body.css'


class Body extends Component{
	
	constructor(props){
		super(props)
		this.state = {featured:[{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200}]}

	}
	
	componentDidMount(){
		document.getElementById("root").style.backgroundColor = "#f8f9fa"
	}
	
	
	renderProductsToHtml(list){
		let html = list.map((item,key) => 
			<div className="product"><img src={require("./img/items/"+item.id+".jpg")}></img><div className="prodName">{item.name}</div><div className="prodPrice">{item.price} EUR</div></div>
		)
		return(html)
		
		
		
	}
	
	
	render(){
		return(
			<div className="Body">

				<span className="logoimg">
					<img src={require("./img/training2.jpg")}></img>
				
				</span>
			
			
				<div className="Featured">
					<h1></h1>
					{this.renderProductsToHtml(this.state.featured)}
				</div>
				
				<div className="Categories">
					<h1>More products</h1><br /><br />
						<div className="category">
							Shoes
							<img src={require("./img/items/1.jpg")}></img>
						</div>
						<div className="category">
							T-Shirts
							<img src={require("./img/items/1.jpg")}></img>
						</div>
						<div className="category">
							Pants
							<img src={require("./img/items/1.jpg")}></img>
						</div>
				</div>
				
			  
			</div>
		)
		
	}
}

export default Body;
