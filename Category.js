import React,{Component} from 'react';
import './category.css';



class Category extends Component{
	constructor(){
		super()
		this.state = {shoes:[{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200},{id:1,name:"Nike Shoes X",price:200}]}
		
	}
	
	renderProductsToHtml(list){
		let html = list.map((item,key) => 
			<div className="product"><img src={require("./img/items/"+item.id+".jpg")}></img><div className="prodName">{item.name}</div><div className="prodPrice">{item.price} EUR</div></div>
		)
		return(html)
		
		
		
	}
	
	render(){
		return(
			<div className="CategoryTab">
				<div className="logoShoes">
					<img src={require('./img/logoshoes.jpg')}></img>
				</div>
			
				<div className="categoryT">Shoes</div>
				<div className="productlist">
					<br /><br /><br />
					{this.renderProductsToHtml(this.state.shoes)}
					
					<span className="NavigateL"><img src={require("./img/navigateL.png")}></img></span>
					<span className="NavigateR"><img src={require("./img/navigateR.png")}></img></span>
				</div>
			
			
			</div>
		)
		
		
	}
	
	
}

export default Category;