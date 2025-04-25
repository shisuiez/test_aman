import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMenu.css';

const AddMenu: React.FC = () => {
    const navigate = useNavigate();
    const [menuName, setMenuName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // В реальном приложении здесь был бы код для сохранения данных
        navigate('/');
    };

    return (
        <div className="add-menu-container">
            <h2>Add Menu</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Menu name:</label>
                    <input
                        type="text"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="add-button">ADD</button>
            </form>
        </div>
    );
};

export default AddMenu; 