﻿import React, { useState } from 'react';

const EditQuantity = ({ product }) => {
    const [qtyToAdd, setQtyToAdd] = useState(1);

    //const navigate = useNavigate();


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        setQtyToAdd(value);
    }

    const handleAddToCart = async (event) => {
        event.preventDefault();
        const requestBody = {
            popcornId: product.id,
            quantity: qtyToAdd
        }
        try {
            const response = await fetch("/cart/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const cart = await response.json();
                if (cart.updated) {
                    alert("Product quantity updated in cart");
                } else {
                    alert("Product quantity changed");
                }
            } else {
                alert("Failed to add product to cart");
            }
        }
        catch (error) {
            console.error("Error adding product to cart: ", error);
        }
    }

    return (
        <div>
            <h2>Edit Popcorn Item</h2>

            <form onSubmit={handleAddToCart}>

                <input type="number"
                    name="quantity"
                    value={ qtyToAdd }
                    onChange={handleInputChange}
                />
                <br />

                <button type="submit">Change Quantity</button>
                
                
            </form >
        </div >
    );
};
export default EditQuantity;