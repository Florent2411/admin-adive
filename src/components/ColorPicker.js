import React from 'react';

const ColorPicker = ({ colorType, color, onChange }) => {
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        onChange(colorType, newColor);
    };

    return (
        <div>
            {colorType === 'primaryColor' ? 'Couleur De Fond' : 'Couleur Du Texte'}
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

export default ColorPicker;