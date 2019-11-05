import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(){
    super();

    this.state = {
      pizzas: [],
      selectedPizza: null
    }

    this.getPizzas();
  }


  getPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzaData => { this.setState({pizzas: pizzaData})})
  }


  selectPizza = (id) => {
    let selected = this.state.pizzas.find(pizza => pizza.id == id);
    

    this.setState({selectedPizza: selected})
    // this.forceUpdate()
  }

  updatePizza = (id, pizza) => {
    fetch('http://localhost:3000/pizzas/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...pizza
      })
    })
    .then(resp => resp.json())
    .then(updatedPizza => {
      let newPizzaList = this.state.pizzas.map(pizza => {
        if (pizza.id == id) {
          return updatedPizza
        } else {
          return pizza
        }
      })
      this.setState({pizzas: newPizzaList})
    })
  }
  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        selectedPizza={this.state.selectedPizza}
        updatePizza={this.updatePizza}/>
        <PizzaList 
          pizzas={this.state.pizzas}
          selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
