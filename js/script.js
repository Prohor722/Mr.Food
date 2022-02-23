const loadFood = () =>{
    // const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    // const data = await res.json();
    // console.log(data);
    const foodItem = document.getElementById('item').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodItem}`)
    .then(res => res.json())
    .then(data=> displayMeal(data.meals))
    .catch(error=> displayError(error))
}

const displayError =(error)=>{
    document.getElementById('error').style.display="block";
    console.log(error);
}
 
const displayMeal = meals =>{
    
    document.getElementById('error').style.display="none";
    document.getElementById('cards').innerHTML="";

    for(const meal of meals){
        const parent = document.getElementById('cards');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card mt-sm-5 m-md-5 shadow">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        parent.appendChild(div);
        console.log(meal);
    }
}