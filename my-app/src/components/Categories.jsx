import React from 'react';
import './layout/Categories.css';
import { api } from '../services/ApiConfig';
import Navigation from './Navigation';
import Recipe from './Recipe';
import { NavLink } from 'react-router-dom';

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

    openRecipe = (id) => {
        console.log(id)
    }


    renderRecipes = () => {
        const {
        } = this.props
        if (this.state.recipes.length) {
            return this.state.recipes.map((recipe, index) => (
                <NavLink exact activeClassName="active" to="/recipe" id={recipe.id}>
                <div key={recipe.id} className="recipePreview" onClick={()=>this.openRecipe(recipe.id)}>
                    <img className="previewPic" src={recipe.image} />
                    <div className="previewBar">
                        <h2 className="previewName">{recipe.name}</h2>

                    </div>
                </div>
                </NavLink>
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
