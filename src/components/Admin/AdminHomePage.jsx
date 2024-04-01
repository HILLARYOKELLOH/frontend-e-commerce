import React, { useState } from 'react';

export const AdminHomePage = () => {
  // State to manage the list of items and their variants
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Item 1',
      variants: []
    },
    // {
    //   id: 2,
    //   name: 'Item 2',
    //   variants: []
    // },
    // Add more items as needed
  ]);

  // Function to add a variant to an item
  const addVariant = (itemId, variant) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, variants: [...item.variants, variant] } : item
      )
    );
  };

  // Function to handle form submission for adding variants
  const handleAddVariant = (itemId, variantName, variantColor, variantSize, variantImage, variantDescription, variantPrice) => {
    const newVariant = {
      name: variantName,
      color: variantColor,
      size: variantSize,
      image: variantImage,
      description: variantDescription,
      price: variantPrice
    };
    addVariant(itemId, newVariant);
  };

  // Array of all colors in the world
  const allColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Silver', 'Gold'];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-black mb-4">Admin Home Page</h2>
      <div>
        {/* Display list of items */}
        {items.map(item => (
          <div key={item.id} className="mb-8">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            {/* Add variants for the item */}
            <div className="flex flex-wrap">
              {item.variants.map((variant, index) => (
                <div key={index} className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-4 mb-4">
                  <div>Name: {variant.name}</div>
                  <div>Color: {variant.color}</div>
                  <div>Size: {variant.size}</div>
                  <div>Description: {variant.description}</div>
                  <div>Price: ${variant.price}</div>
                  <img src={variant.image} alt={variant.name} className="mt-2" style={{ maxWidth: '200px' }} />
                </div>
              ))}
              {/* Form for adding a new variant */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { variantName, variantColor, variantSize, variantImage, variantDescription, variantPrice } = e.target.elements;
                  handleAddVariant(
                    item.id,
                    variantName.value,
                    variantColor.value,
                    variantSize.value,
                    variantImage.files[0], // Accessing the file from input element
                    variantDescription.value,
                    variantPrice.value
                  );
                  // Reset form fields
                  e.target.reset();
                }}
              >
                <div className="flex flex-col">
                  <input type="text" name="variantName" placeholder="Name" className="mb-2" />
                  <textarea name="variantDescription" placeholder="Description" className="mb-2" />
                  <select name="variantColor" className="mb-2">
                    {allColors.map((color, index) => (
                      <option key={index} value={color}>{color}</option>
                    ))}
                  </select>
                  <input type="text" name="variantSize" placeholder="Size" className="mb-2" />
                  <input type="file" name="variantImage" accept="image/*" className="mb-2" />
                  <input type="number" name="variantPrice" placeholder="Price" className="mb-2" />
                </div>
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md mt-2">Add Variant</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
