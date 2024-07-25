import { useEffect, useState } from "react";
import axios from 'axios';

function Assignment3() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('https://fakestoreapi.com/products'); // Assuming a fake API for products
            setProducts(res.data);
            console.log(res.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <style>
                {`
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                }

                .product-item {
                    border: 1px solid #ddd;
                    padding: 16px;
                    margin: 16px;
                    width: 200px;
                    text-align: center;
                }

                .product-item img {
                    max-width: 100%;
                    height: auto;
                }

                .product-rating {
                    margin: 8px 0;
                }

                .product-price {
                    font-size: 18px;
                    font-weight: bold;
                }

                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    cursor: pointer;
                }
                `}
            </style>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <div className="product-rating">⭐⭐⭐⭐⭐</div> {/* Assuming a static rating for simplicity */}
                        <div className="product-price">₹{product.price}</div>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignment3;
