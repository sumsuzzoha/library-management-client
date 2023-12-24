import  { useEffect, useState } from 'react';
// import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
// import Cart from '../Cart/Cart';
import './AllBook.css';
import Book from '../Books/Book';
// import {  useLoaderData } from 'react-router-dom';

const AllBook = () => {
    const [books, setBooks] = useState([]);
    // const [cart, setCart] = useState([])
    // const {count}= useLoaderData();
    // console.log(count);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     const savedCart = [];
    //     // step 1: get id of the addedProduct
    //     for (const id in storedCart) {
    //         // step 2: get product from products state by using id
    //         const addedProduct = products.find(product => product._id === id)
    //         if (addedProduct) {
    //             // step 3: add quantity
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // step 4: add the added product to the saved cart
    //             savedCart.push(addedProduct);
    //         }
    //         // console.log('added Product', addedProduct)
    //     }
    //     // step 5: set the cart
    //     setCart(savedCart);
    // }, [products])

    // const handleAddToCart = (product) => {
    //     // cart.push(product); '
    //     let newCart = [];
    //     // const newCart = [...cart, product];
    //     // if product doesn't exist in the cart, then set quantity = 1
    //     // if exist update quantity by 1
    //     const exists = cart.find(pd => pd._id === product._id);
    //     if (!exists) {
    //         product.quantity = 1;
    //         newCart = [...cart, product]
    //     }
    //     else {
    //         exists.quantity = exists.quantity + 1;
    //         const remaining = cart.filter(pd => pd._id !== product._id);
    //         newCart = [...remaining, exists];
    //     }

    //     setCart(newCart);
    //     addToDb(product._id)
    // }

    // const handleClearCart = () => {
    //     setCart([]);
    //     deleteShoppingCart();
    // }

    return (
        <div className='shop-container'>
            <div className="products-container"> 
                {
                    books.map(book => <Book
                        key={book._id}
                        book={book}
                        // handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            {/* <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div> */}
        </div>
    );
};

export default AllBook;