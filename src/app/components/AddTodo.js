import React from "react";

class AddTodo extends React.Component {

    onHandleSubmit(e) {
        e.preventDefault();
        let item = e.target.querySelector('#item').value;
        let price = e.target.querySelector('#price').value;
        if (item !== "" && price !== "") {
            this.props.onAddTodo(item, price);
        } else {
            alert(`Fill out the all fields!`);
        }
    };

    render() {
        return(
            <form className="AddTodo" onSubmit={this.onHandleSubmit.bind(this)}>
                <div className="input-group">
                    <input id="item" type="text" className="form-control mr-0 mr-sm-1 mb-1" placeholder="Todo item...."/>
                </div>
                <div className="input-group">
                    <input id="price" type="text" className="form-control mr-0 mr-sm-1 mb-1" placeholder="Price...."/>
                </div>
                <button id="btn-addtodo" type="submit" className="btn btn-lg btn-primary mb-1">
                    Add Todo
                </button>
            </form>
        );
    }
};

export default AddTodo;