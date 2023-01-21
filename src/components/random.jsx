import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";


const baseURL = process.env.REACT_APP_BASE_URL;

function Random () {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

  let ingredientArr = []
  let measurementArr = []
  Object.entries(post.drinks[0]).forEach(field => {
    if(field[1]){
      if (field[0].startsWith('strIngredient')){
        ingredientArr.push(field[1])
    } else if(field[0].startsWith('strMeasure')){
      measurementArr.push(field[1])
    }
  }
  })

  return (
    <div className="random">
      <h3 style={{color: 'white'}}>Your Random Cocktail is:</h3>
      <h1 style={{color: 'white', fontWeight: 'bold'}}>{post.drinks[0].strDrink}</h1>
      <img className="randomImg" src={post.drinks[0].strDrinkThumb} />

      <div className="ingredientsTab">
        <div style={{width: '100%', display: 'inline-block'}}>
            <h2 style={{fontWeight: 'bold'}}>Ingredients</h2>
            <div className="firstDiv">
                <ul>
                    {ingredientArr.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="firstDiv2">
                <ul>
                    {measurementArr.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
        <div className="instructionsText">
            <h2 style={{fontWeight: 'bold'}}>Instructions</h2>
            <p className="secondDiv">{post.drinks[0].strInstructions}</p>
        </div>
      </div>

      <div>
      <Button className="nextRandomBttn" variant="warning" onClick={() => {window.location.reload(false)}}>Next Random</Button>{''}
      <Button>favorite</Button>
      </div>
    </div>
    )
}

export default Random