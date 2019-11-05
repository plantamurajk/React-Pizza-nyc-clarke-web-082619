import React from "react"

class Pizza extends React.Component {
  
  render(){
   let {id, topping, size, vegetarian} = this.props.pizza;
    return(
      <tr>
        <td>{topping}</td>
        <td>{size}</td>
        <td>{vegetarian ? 'Yes' : 'No'}</td>
        <td><button type="button" 
        className="btn btn-primary"
        onClick={() => {this.props.selectPizza(id)}}>Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
