import React from 'react';

import ShoppingItem from '../components/ShoppingItem';
import AddTodo from '../components/AddTodo';
import Showcase from '../components/Showcase';
import Cards from '../components/Cards';

import showcaseImage from '/Users/DELL/Desktop/React JS Apps/redux-sandbox-2/src/img/img.jpg';
import cardImg_1 from '/Users/DELL/Desktop/React JS Apps/redux-sandbox-2/src/img/img_2.jpg';
import cardImg_2 from '/Users/DELL/Desktop/React JS Apps/redux-sandbox-2/src/img/img_3.jpg';
import cardImg_3 from '/Users/DELL/Desktop/React JS Apps/redux-sandbox-2/src/img/img_4.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingItem: [],
            navbarNavs: [],
            cardContents: []
        }
    };

    componentWillMount() {
        this.setState({
            shoppingItem: [
                { item: 'Plice Coat', price: '$9.990'},
                { item: 'Navy Jacket', price: '$20.990'},
                { item: 'Army Cap', price: '$10.990'},
                { item: 'Swimming Shoe',price: '$30.990'}
            ],
            navbarNavs: ["Home", "Contact", "About", "Register", "Login"],
            cardContents: [
                { image: cardImg_1, title: 'First title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'},
                { image: cardImg_2, title: 'Second title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'},
                { image: cardImg_3, title: 'Third title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'},
                { image: cardImg_1, title: 'Fourth title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'},
                { image: cardImg_2, title: 'Fifth title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'},
                { image: cardImg_3, title: 'Sixth title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae odit dolore deleniti quis mollitia officia laboriosam quas quasi at, temporibus ratione repellat maiores voluptas vero est beatae. Odio, accusamus.'}
            ]
        });
    }

    onAddTodo(item, price) {
        let newShoppingItems = this.state.shoppingItem;
        newShoppingItems.push({item: item, price: price});
        this.setState({
            shoppingItem: newShoppingItems
        });
    }

    onDeleteTodo(item) {
        let shoppingItems = this.state.shoppingItem;
        let updatedItems = shoppingItems.filter((val, i) => {
            return item !== val;
        });
        this.setState({
            shoppingItem: updatedItems
        });
    }

    render() {
        let items = this.state.shoppingItem.map(item => {
            return <ShoppingItem list={item} key={item.price} onDeleteTodo={this.onDeleteTodo.bind(this)}/>
        });
        return(
            <div className="App">
                <Showcase image={showcaseImage} navbarNavs={this.state.navbarNavs} />
                <Cards cardContents={this.state.cardContents} />
                <div className="shopping-item container mt-4">
                    {items}
                </div>
                <div className="container">
                    <h2 className="p-2 text-center">Make Shopping List</h2>
                    <AddTodo onAddTodo={this.onAddTodo.bind(this)}/>
                </div>
            </div>
        );
    }
};

export default App;