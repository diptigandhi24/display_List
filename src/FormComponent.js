import React,{Component} from 'react';

class FormComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {value:''};
		this.displaytext=this.displaytext.bind(this);
		this.handleChange1=this.handleChange1.bind(this);
		
		this.handleClick=this.handleClick.bind(this);
		
	}
	displaytext(){
			return "text";
		}
	handleChange1(event){
			this.setState({value:event.target.value.toUpperCase()});
			console.log(typeof(this));
		}
		
		handleClick(){
			
		}
	render(){
	 return(	
	<form>
    <label>Enter a word : 
    <input type="text" value={this.state.value} onChange={this.handleChange1}></input>
    <button type="submit" onClick={this.handleClick}></button>
    </label>
    <h1>Enter Value is : {this.state.value}</h1>
    <h2>List of Words</h2>
    <ul>
    <ol></ol>
    </ul>
    </form>

    )}
}
export default FormComponent;