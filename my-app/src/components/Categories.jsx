import React from 'react';
import './layout/Categories.css';
import { api } from '../services/ApiConfig';
import Navigation from './Navigation';

export let currentRecipe = '';

export default class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {
        this.fetchRecipes()
    }

    fetchRecipes = async () => {
        try {
            const recipes = await api.get('/recipes')
            console.log(recipes)
            this.setState({ recipes: recipes.data })
        } catch (error) {
            console.error(error)
        }
    }

    renderRecipes = () => {
        const {
            match: { path },
            history,
        } = this.props
        if (this.state.recipes.length) {
            return this.state.recipes.map((recipe) => (
                <div key={recipe.id} className="recipePreview" onClick={() => history.push(`${path}/recipe/${recipe.id}`)} >
                    <img className="previewPic" src={recipe.image} />
                    <div className="previewBar">
                        <h2 className="previewName">{recipe.name}</h2>
                    </div>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="categories">
                <Navigation />
                <div className="recipesList">
                    {this.renderRecipes()}
                </div>
            </div>
        )
    }
}
