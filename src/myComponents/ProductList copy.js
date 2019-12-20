import React, { Component } from 'react'
import { connect } from 'react-redux';
import {removeProduct, fetchProductWithAPI} from '../stateManagement/actions/productActions';

class ProductList extends Component {
    componentDidMount(){
        this.props.getAll();
    }
    render() {
        return (
            <div>
                <h2>Product List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.productId}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>
                                        <button onClick={() => this.props.history.push(`/products/edit/${item.productId}`)} className="btn btn-warning btn-sm">Edit</button> | 
                                        <button onClick={() => this.props.removeItem(item.iproductIdd)}
                                         className="btn btn-danger btn-sm">Remove</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

//state == store
//برای خواندان از استور
const mapStateToProps = (state) => {
    return {
        products: state.productState.items,
        isLoading:state.productState.isLoading
    };
};
//Dispatch = Action
//فراخوانی و اجرای اکشن ها
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => dispatch(removeProduct(id)),
        getAll: async () => dispatch(await fetchProductWithAPI(dispatch)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);