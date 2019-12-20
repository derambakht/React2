import React, { Component } from 'react'
import { connect } from 'react-redux';
import {removeProduct, fetchProductWithAPI} from '../stateManagement/actions/productActions';
import ReactTable from 'react-table'

class ProductList extends Component {

   columns = [{
        Header: 'Code',
        accessor: 'productId' // String-based value accessors!
    }, {
        Header: 'Product Name',
        accessor: 'productName',
    }, {
        Header: 'Price',
        accessor: "unitPrice"
    }]
    config = { pageSize: 10, sorted: [], filtered: [] };

    state = {pages:1,  page: 0,};

    componentDidMount(){
        this.props.getAll();
    }
    componentWillReceiveProps(newProps)
    {
        console.log('componentWillReceiveProps');
        console.log(newProps.products);
        const pages = Math.ceil(newProps.products.length / this.config.pageSize);
        console.log(pages);
        this.setState({pages:pages})
    }

    pageChanged = (nextPage) => {
        console.log(nextPage);
        this.setState({page:nextPage});
    }

    render() {
        return (
            <div>
                <h2>Product List</h2>
                <ReactTable
                filterable={true}
                sortable={true}
                data={this.props.products}
                columns={this.columns}
                defaultPageSize={this.config.pageSize}
                //onFetchData={fetchData}
                onPageChange={(pageIndex) => { this.pageChanged(pageIndex) }}
                pages={this.state.pages}
                page={this.state.page}
                className="-striped -highlight"
                previousText='قبلی'
                nextText='بعدی'
                loadingText='در حال بارگذاری'
                noDataText='آیتمی پیدا نشد'
                pageText='صفحه'
                ofText='از'
                rowsText='سطر'
                pageJumpText='پرش به صفحه'
                rowsSelectorText='سطر در صفحه'
            /> 
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