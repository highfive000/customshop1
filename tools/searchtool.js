import React, {Component} from 'react';



class SearchTool extends Component{
	constructor(props){
		super(props)
		this.state = {searchval:"Search for product"}
		this.changeValue = this.changeValue.bind(this)

	}
	
	openSearch(event){
		if(event.target.value == "Search for product"){
			this.setState({searchval:""})

		}
		if(event.target.value != "Search for product"){
			this.setState({searchval:"Search for product"})

		}

	}
	
	changeValue(event){
	this.setState({searchval : event.target.value})
	}
	
	
	render(){
		return(
			<div className="searchtool">
				<span className="searchBar">
					<img src={require("../img/search.png")}></img>
					<input onChange={this.changeValue} onBlur={(e) => this.openSearch(e)} value={this.state.searchval} onClick={(e) => this.openSearch(e)} autofocus></input>
				</span>
			</div>
		
		
		)
	}
	
	
	
}

export default SearchTool;
