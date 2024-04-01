import React, { useState } from 'react';
import './MainLayout.css'; // Import your CSS file

export const AdminHomePage = () => {
  // State to manage the list of items and their variants
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Add Product',
      variants: []
    }
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
  const handleAddVariant = (itemId, variantName, variantColor, variantSize, variantImage, variantDescription, variantPrice, variantCategory) => {
    const newVariant = {
      name: variantName,
      color: variantColor,
      size: variantSize,
      image: URL.createObjectURL(variantImage), // Create a temporary URL for the image
      description: variantDescription,
      price: variantPrice,
      category: variantCategory
    };
    addVariant(itemId, newVariant);
  };

  // Array of all colors in the world
  const allColors = ['--Select color--','Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Silver', 'Gold'];

  // Array of all categories
  const allCategories = ['--select Category--','Phones', 'Clothing', 'Beddings', 'Furniture'];

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
                <div key={index} className="variant-card">
                  <div>Name: {variant.name}</div>
                  <div>Color: {variant.color}</div>
                  <div>Size: {variant.size}</div>
                  <div>Category: {variant.category}</div>
                  <div>Description: {variant.description}</div>
                  <div>Price: ksh{variant.price}</div>
                  <img src={variant.image} alt={variant.name} className="variant-image" />
                </div>
              ))}
              {/* Form for adding a new variant */}
              <form
                className="variant-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const { variantName, variantColor, variantSize, variantImage, variantDescription, variantPrice, variantCategory } = e.target.elements;
                  handleAddVariant(
                    item.id,
                    variantName.value,
                    variantColor.value,
                    variantSize.value,
                    variantImage.files[0], // Accessing the file from input element
                    variantDescription.value,
                    variantPrice.value,
                    variantCategory.value
                  );
                  // Reset form fields
                  e.target.reset();
                }}
              >
                <input type="text" name="variantName" placeholder="Name" className="form-input" required />

                <select name="variantCategory" className="form-input" required>
                  {allCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <select name="variantColor" className="form-input" required>
                  {allColors.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
                </select>
                <input type="number" name="variantPrice" placeholder="Price" className="form-input" required />
                <div className="size-options">
                  <span>Size:</span>
                  <label>
                    <input type="radio" name="variantSize" value="S" className="form-input" required />
                    S
                  </label>
                  <label>
                    <input type="radio" name="variantSize" value="M" className="form-input" required />
                    M
                  </label>
                  <label>
                    <input type="radio" name="variantSize" value="L" className="form-input" required />
                    L
                  </label>
                  <label>
                    <input type="radio" name="variantSize" value="XL" className="form-input" required />
                    XL
                  </label>
                  <label>
                    <input type="radio" name="variantSize" value="XXL" className="form-input" required />
                    XXL
                  </label>
                </div>
                <textarea name="variantDescription" placeholder="Description" className="form-input" required />
                <input type="file" name="variantImage" accept="image/*" className="form-input" required />

                <button type="submit" className="form-button">Add Variant</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
