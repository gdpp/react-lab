import { useState, useEffect } from 'react'

import axios from 'axios'

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res => {
            setMeals(res.data.meals)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    const mealsList = meals.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section key={idMeal}>
                <img src={strMealThumb} alt={strMeal} width={150}/>
                <section>
                    <p>{strMeal}</p>
                    <p>{idMeal}</p>
                </section>
            </section>
        )
    }
)
    return (
        <div>
            <h1>Meals List</h1>
            {mealsList}
        </div>
    )
}

export default Meals