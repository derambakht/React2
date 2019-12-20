import React, { Component } from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>Home</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-primary text-white text-center pt-5 pb-5">
                            <h3>Products Count : {this.props.productCount}</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-danger text-white text-center pt-5 pb-5">
                            <h3>Customer Count : ??</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-secondary text-white text-center pt-5 pb-5">
                            <h3>Orders Count : ??</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-success text-white text-center pt-5 pb-5">
                            <h3>Category Count : ??</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        productCount: state.productState.items.length
    };
}

export default connect(mapStateToProps)(Home);