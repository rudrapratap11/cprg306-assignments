"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [mealIngredients, setMealIngredients] = useState({});

    const fetchMealIdeas = async (ingredient) => {
        setLoading(true);
        const cleanedIngredient = ingredient.replace(/[\u{1F600}-\u{1F6FF}]/gu, ''); // Remove emojis
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`);
        const data = await response.json();
        setLoading(false);
        return data.meals || []; // Return an empty array if no meals are found
    };

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
            setMealIngredients((prev) => ({ ...prev, [idMeal]: ingredients }));
        }
    };

    const handleMealClick = (meal) => {
        const isAlreadySelected = selectedMealId === meal.idMeal;
        setSelectedMealId(isAlreadySelected ? null : meal.idMeal);
        if (!mealIngredients[meal.idMeal]) {
            fetchMealIngredients(meal.idMeal);
        }
    };

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
            setSelectedMealId(null);
            setMealIngredients({});
        }
    }, [ingredient]);

    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg">
            {loading ? (
                <p>Loading...</p>
            ) : meals.length > 0 ? (
                <>
                    <p className="mb-4 text-lg font-semibold">Here are some meal ideas using <span className="text-blue-400">{ingredient}</span>:</p>
                    <ul className="flex flex-col gap-4">
                        {meals.map(meal => (
                            <li
                                key={meal.idMeal}
                                className="bg-gray-800 p-4 rounded-lg shadow-md"
                            >
                                <div
                                    className="flex items-center cursor-pointer"
                                    onClick={() => handleMealClick(meal)}
                                >
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 mr-4 rounded-lg" />
                                    <span className="text-lg font-bold">{meal.strMeal}</span>
                                </div>
                                {selectedMealId === meal.idMeal && mealIngredients[meal.idMeal] && (
                                    <div className="mt-4 bg-gray-700 p-3 rounded-lg">
                                        <h3 className="text-md font-semibold mb-2">Ingredients:</h3>
                                        <ul className="list-disc pl-5">
                                            {mealIngredients[meal.idMeal].map((ingredient, index) => (
                                                <li key={index} className="text-sm">{ingredient}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No meal ideas found for <span className="text-red-400">{ingredient}</span>.</p>
            )}
        </div>
    );
};

export default MealIdeas;