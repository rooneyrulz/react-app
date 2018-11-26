import React from 'react';
import '../css/ShoppinItems.css';

class ShoppingItem extends React.Component {

    onHandleDelete(e) {
        this.props.onDeleteTodo(this.props.list);
    };

    render() {
        return(
            <ul className="list-group mb-4">
                <span className="close" onClick={this.onHandleDelete.bind(this)}>&times;</span>
                <li className="list-group-item bg-primary text-light">
                    <strong className="float-left">Item</strong>
                    <span className="float-right">{this.props.list.item}</span>
                </li>
                <li className="list-group-item">
                    <strong className="float-left">Price</strong>
                    <span className="float-right">{this.props.list.price}</span>
                </li>
            </ul>
        );
    }
};

export default ShoppingItem;