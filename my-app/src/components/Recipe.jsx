import React from 'react';
import './layout/Recipe.css';
import { api, wineApi } from '../services/ApiConfig';
import Navigation from './Navigation';
import Axios from 'axios';


class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: [],
            directions: [],
            prepTime: '',
            cookTime: '',
            image: '',
            wines: [],
            text: '',
            matches: ''
        };
    }

    componentDidMount() {
        this.getRecipeId()
    }

    getRecipeId = async () => {
        const { match: { params }
        } = this.props
        try {
            const rec = await api.get(`/recipes/${params.id}`)
            this.setState({
                name: rec.data.name,
                ingredients: rec.data.ingredients,
                directions: rec.data.directions,
                prepTime: rec.data.prepTime,
                cookTime: rec.data.cookTime,
                image: rec.data.image
            })
            this.getWines()
        } catch (error) {
            console.error(error)
        }
    }

    getWines = async () => {
        try {
            const params = {
                food: this.state.name
            }

            Axios.get('https://api.spoonacular.com/food/wine/pairing?apiKey=f3dfbdd9a9234afdb5841412b40f2b5a', { params })
                .then(res => {
                    if (res.data.status !== "failure") {
                        this.setState({
                            matches: res.data.productMatches[0].title,
                            wines: res.data.pairedWines,
                            text: res.data.pairingText
                        })
                    }
                    else {
                        this.setState({
                            wines: 'No wine pairings found.',
                            text: '',
                            matches: ''
                        })
                    }
                })
        } catch (error) {
            this.setState({
                wines: 'No wine pairings found.',
                text: '',
                matches: ''
            })
        }
    }

    renderList = () => this.state.ingredients.map((each) => (
        <li>{each}</li>
    ))
    renderDirections = () => this.state.directions.map((each) => (
        <li>{each}</li>
    ))


    render() {
        const { name, ingredients, directions, prepTime, cookTime, image, wines, text, matches } = this.state
        return (
            <div className="recipe-container">
                <Navigation />
                <div className="imageTitle">
                <img src={image} />
                <div className="titleOverlay">
                <h1>{name}</h1>
                </div>
                </div>
                <div className="recipe">
                    {/* <h1>{name}</h1> */}
                    <div className='time'>
                        <p>Prep Time: {prepTime}min</p>
                        <p>Cook Time: {cookTime}min</p>
                    </div>
                    <p>Ingredients:</p>
                    <ul>
                        {this.renderList()}
                    </ul>
                    <p>Directions:</p>
                    <ul>
                        {this.renderDirections()}
                    </ul>
                    <div className="wine-container">
                        <h2>Wines to pair with: {wines.toString()}</h2>
                        <p>{text}</p>
                        <h2>Suggestion: {matches}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;

