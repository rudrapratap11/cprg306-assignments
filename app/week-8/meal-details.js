"use client";
import React, { useState, useEffect } from 'react';

const MealDetails = ({ meal }) => {
    const [ingredients, setIngredients] = useState([]);

    const fetchMealIngredients = async (idMeal) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && ingredient.trim()) {
                    ingredients.push(`${measure} ${ingredient}`.trim());
                }
            }
            setIngredients(ingredients);
        }
    };

    useEffect(() => {
        if (meal) {
            fetchMealIngredients(meal.idMeal);
        }
    }, [meal]);

    return (
        <div className="mt-4 p-4 bg-gray-700 rounded shadow">
            <h3 className="text-white text-xl mb-2">{meal.strMeal} Ingredients:</h3>
            {ingredients.length > 0 ? (
                <ul className="list-disc pl-5 text-white">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-white">Loading ingredients...</p>
            )}
        </div>
    );
};

export default MealDetails;