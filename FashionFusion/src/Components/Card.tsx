import './Card.css'

import React, { useEffect, useState } from "react";

interface Item {
  id: number;
  category: string;
  name: string;
  price: number;
  size: string[];
  color: string[];
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

const fetchData = async () => {
  const response = await fetch("https://mock-server-app-1.onrender.com/mens");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const MyComponentB: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData()
      .then((data: Item[]) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return <div>My data is empty</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div className="cardB" key={item.id}>
          <img src={item.imageURL} alt={item.name} className="card-img-topB" />
          <div className="card-bodyB">
            <h5 className="card-titleB">{item.name}</h5>
            <p className="card-textB">{item.description}</p>
            <p className="card-textB">Price: ${item.price}</p>
            <p className="card-textB">Category: {item.category}</p>
            <p className="card-textB">Available Sizes:<span className='spanB'>{item.size.join("| ")}</span></p>
            <p className="card-textB">Available Colors: <span className='spanB'>{item.color.join("| ")}</span></p>
            <p className="card-textB">Stock: {item.stock}</p>
            <p className="card-textB">Rating: {item.rating}</p>
            <button className="btn-primaryB" onClick={() => handleDeleteItem(item.id)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponentB;
