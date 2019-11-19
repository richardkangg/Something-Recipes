import React from 'react';
import './layout/Recipe.css';
import Categories from './Categories';
import { api, infoApi } from '../services/ApiConfig';



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
            info: '',
        };
    }

    componentDidMount() {
        this.getRecipeId()
        this.fetchInfo()
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
        } catch (error) {
            console.error(error)
        }
    }

    fetchInfo = async () => {
        try {
            const params = {
                app_id: 'a5a5f4a6',
                app_key: '3c9690f040fa0d8c5bdc4ddfe5c3e5f5'
            }
            const info = await infoApi.post('/', null, { params })
            console.log(info)
            this.setState({ info: info.data.calories })
        } catch (error) {
            console.error(error)
        }
    }


    render() {
        const { name, ingredients, directions, prepTime, cookTime, image } = this.state
        return (
            <div className="recipe-container">
                <img src={image} />
                <div className="recipe">
                    <h1>{name}</h1>
                    <div className='time'>
                        <p>Prep Time: {prepTime}</p>
                        <p>Cook Time: {cookTime}</p>
                    </div>
                    <p>Ingredients: {ingredients}</p>
                    <p>Directions: {directions}</p>
                </div>
            </div>
        );
    }
}

export default Recipe;

