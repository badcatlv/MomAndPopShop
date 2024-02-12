﻿// eslint-disable-next-line
import { useEffect, useState } from 'react';
/*import { Link } from 'react-router-dom';
*/



const ProductHome = () => {


    const [popcorn, setPopcorn] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = () => {
        fetch('popcorn')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                setPopcorn(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const handleDelete = (id) => {
        fetch(`popcorn/${id}`, { method: 'DELETE' })
            .then(results => {
                if (!results) {
                    throw new Error("Cannot delete item.");
                }
                fetchProductData();
            })
            .catch(error => {
                console.error("Error deleting item: ", error);
            });
    };

    return (
        <main>
            <div className="text-center">
                <h1 className="display-4">Popcorn List</h1>

                {popcorn.length > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popcorn.map((popcornItem) => (
                                <tr key={popcornItem.id}>
                                    <td>{popcornItem.name}</td>
                                    <td>{popcornItem.description}</td>
                                    <td>{popcornItem.popcornPrice}</td>
                                    <td>{popcornItem.quantity}</td>
                                    <td><button onClick={() => handleDelete(popcornItem.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {popcorn.length === 0 && !loading && (
                    <p>No items in inventory yet!</p>
                )}              
            </div>
        </main>
    );
};

export default ProductHome;
