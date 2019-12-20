import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct, getProduct } from '../stateManagement/actions/productActions'

class ProductInfo extends Component {
    componentDidMount() {
        if (this.props.match.params.id) {
            //edit mode
            const id = this.props.match.params.id;
            this.props.getItem(id);
        }

    }

    componentWillReceiveProps(props) {
        console.log('new props');
        console.log(props);
    }

    saveData = () => {
        let item = {};
        item.id = this.refs.id.value;
        item.title = this.refs.title.value;
        item.price = this.refs.price.value;
        console.log(item);
        this.props.addItem(item);
        this.props.history.push('/products');
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Product Info
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="form-group row">
                                    <label className="col-md-3 text-right">Id :</label>
                                    <div className="col-md-9">
                                        <input ref="id" className="form-control"
                                            value={this.props.currentProduct.id} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group row">
                                    <label className="col-md-3 text-right">Title :</label>
                                    <div className="col-md-9">
                                        <input ref="title" className="form-control"
                                            value={this.props.currentProduct.title} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group row">
                                    <label className="col-md-3 text-right">Price :</label>
                                    <div className="col-md-9">
                                        <input ref="price" className="form-control"
                                            value={this.props.currentProduct.price} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => this.saveData()} className="btn btn-success btn-block">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentProduct: state.productState.selectedItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addProduct(item)),
        getItem: (id) => dispatch(getProduct(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);