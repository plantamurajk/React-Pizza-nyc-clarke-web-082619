import React from "react"

// const defaultState = {
//   vegetarian: false,
//   topping: '',
//   size: 'Small',
//   changed: false,
//   id: 0
// }

class PizzaForm extends React.Component {
    

      state = {
        vegetarian: null,
        topping: null,
        size: null,
        // changed: false,
        // id: 0
      }

      // componentDidUpdate(){
      //   if (this.props.selectedPizza){
      //     if (this.props.selectedPizza){
      //       this.setState({vegetarian: this.props.selectedPizza.vegetarian,
      //       topping: this.props.selectedPizza.topping,
      //        size: this.props.selectedPizza.size})
      //       }
      //   }
      // }

      // componentDidMount(){
        
    
      //   if (this.props.selectedPizza){
      //     let {topping, vegetarian, size} = this.props.selectedPizza;
      //     // topping = this.props.selectedPizza.topping;
      //     // size = this.props.selectedPizza.size;
      //     // vegetarian = this.props.selectedPizza.vegetarian;
      //     this.setState({vegetarian: vegetarian,
      //     topping: topping,
      //       size: size, changed: false})
        
      //   }
      //   console.log('FORM DID MOUNT, CURRENT STATE:', this.state)
      // }

      static  getDerivedStateFromProps(props, state) {
      //   if (nextProps.selectedPizza){
      //   let {topping, size, vegetarian} = nextProps.selectedPizza
      //   return {
      //     topping: topping,
      //     size: size,
      //     vegetarian: vegetarian
      //   }
      // }
      if (props.selectedPizza){
        if (state.topping === null || props.selectedPizza.id != state.id) {
          return {
            topping: props.selectedPizza.topping,
            size: props.selectedPizza.size,
            vegetarian: props.selectedPizza.vegetarian,
            id: props.selectedPizza.id
          }
        } else {
          return state
        }
      }
      }
      



      toggleVegetarian = () => {
  
        this.setState({vegetarian: !this.state.vegetarian})
      }

      handleToppingchange = (event) => {
        console.log(event.target.value)

        this.setState({ topping: event.target.value });
      }

      handleSizeChange = (event) => {
  
        this.setState({ size: event.target.value})
      }

      handleVegetarianChange = (bool) => {

        this.setState({vegetarian: bool})
      }

      handleSubmit = () => {
        let editedPizza = this.state;

        this.props.updatePizza(this.props.selectedPizza.id, editedPizza);
        // this.setState(defaultState)
      }

      toppingPlaceholder = () => {
        if (this.state.topping){
          return this.state.topping;
        } else {
          return 'Pizza Topping'
          
        }
      }
  
  
  render(){   
    // console.log(this.props.selectedPizza)
    let topping = 'default';
    let size = 'Small' ;
    let vegetarian = true;

  //   if (this.props.selectedPizza){
  //     if (this.state.id != this.props.selectedPizza.id){
  //       this.setState({id: this.props.selectedPizza.id, changed: false})
  //     }
  // }
    
  //   if (this.props.selectedPizza) {
  //     topping = this.state.topping;
  //     size = this.state.size;
  //     vegetarian = this.state.vegetarian;
  //   }
          return(
                <div className="form-row">
                  <div className="col-5">
                      <input type="text" className="form-control" placeholder={this.toppingPlaceholder} onChange={this.handleToppingchange} value={
                          this.state.topping
                        }/>
                  </div>
                  <div className="col">
                    <select value={this.state.size} onChange={this.handleSizeChange} className="form-control">
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" value="Vegetarian" 
                      onChange={() => {this.handleVegetarianChange(true)}} checked={this.state.vegetarian}/>
                      <label className="form-check-label">
                        Vegetarian
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" value="Not Vegetarian" 
                      onChange={() => {this.handleVegetarianChange(false)}} checked={!this.state.vegetarian}/>
                      <label className="form-check-label">
                        Not Vegetarian
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>

            )
                      }
}

export default PizzaForm
