import React from 'react';
import Shop from './Shop';
import { connect } from 'react-redux';
import { getItems, like, dislike } from '../../../../Redux/reducers/shop-reducer';

class ShopContainer extends React.Component {

    componentDidMount() {
        // this.props.getItems();
    }

    render() {
        return (
            <Shop {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shopItems: state.shop.shopItems,
        type: state.type.type
    }
}

const mapDispatchToProps = {
    getItems,
    like,
    dislike
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);