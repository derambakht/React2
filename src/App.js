import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './stateManagement/stores/store'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'
import Home from './myComponents/Home';
import ProductList from './myComponents/ProductList';
import ProductInfo from './myComponents/ProductInfo';
import { PageNotFound } from './myComponents/PageNotFound';
import "react-table/react-table.css";

export default class App extends Component {
  componentDidMount(){
    window.addEventListener('load', (event) => {
      console.log('reaload Page'); 
    })
  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <>
            <div>
              <h1 className="bg-secondary pt-2 pb-2 text-center text-white">First Sample App with Redux</h1>
              <ul className="main-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Product List</NavLink></li>
                <li><NavLink to="/products/add">Add New Product</NavLink></li>
              </ul>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col mt-2">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={ProductList} />
                    <Route exact path="/products/add" component={ProductInfo} />
                    <Route exact path="/products/edit/:id" component={ProductInfo} />
                    <Route path="**" component={PageNotFound} />
                  </Switch>
                </div>
              </div>
            </div>
            <hr />
            <p>Add With Developer A</p>
            <h3>Modify with Developer A</h3>
            <h3>Add after First Push in origin</h3>
          </>
        </HashRouter>
      </Provider>
    )
  }
}
