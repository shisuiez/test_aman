import React, { useState } from 'react';
import { MenuItem } from '../types/menu';
import { Link } from 'react-router-dom';
import './Home.css';

const initialMenuItems: MenuItem[] = [
    { 
        id: '1', 
        name: 'Bibimbap', 
        price: 12000, 
        image: 'https://th.bing.com/th/id/OIP.YCdzUarYbAuQSKfVoMBB1QHaEm?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
        id: '2', 
        name: 'Kimchi Jjigae', 
        price: 11000, 
        image: 'https://th.bing.com/th/id/OIP.-HqLr-TiIwNeBYS7pGwMUwHaE7?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
        id: '3', 
        name: 'Bulgogi', 
        price: 15000, 
        image: 'https://th.bing.com/th/id/OIP.TwiVJG0qa1SswmLVAiF1_AHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
        id: '4', 
        name: 'Tteokbokki', 
        price: 9000, 
        image: 'https://th.bing.com/th/id/OIP.44oJ9fRUtq7rKiRrksDZZAHaEJ?w=334&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
        id: '5', 
        name: 'Japchae', 
        price: 11000, 
        image: 'https://th.bing.com/th/id/OIP.2TBTWC1qjxMqbE3_WAHqnwHaFm?w=257&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
        id: '6', 
        name: 'Samgyeopsal', 
        price: 16000, 
        image: 'https://th.bing.com/th/id/OIP.K2rrkhs1XC4JjK89ZO_a0gHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
];

const Home: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

    const handleDelete = (id: string) => {
        setMenuItems(menuItems.filter(item => item.id !== id));
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Korean Restaurant Menu</h1>
                <div className="korean-text">한식</div>
                <Link to="/add" className="add-menu-link">Add Menu</Link>
            </div>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <div className="menu-image-container">
                            <img src={item.image} alt={item.name} className="menu-image" />
                        </div>
                        <div className="menu-info">
                            <div className="menu-name">{item.name}</div>
                            <div className="menu-price">₩{item.price.toLocaleString()}</div>
                            <button 
                                className="delete-button"
                                onClick={() => handleDelete(item.id)}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home; 