import React from 'react'
import './layout/Form.css'

const Form = (props) => {
    const { onChange, onSubmit, onClick } = props
    const { name, ingredients, directions, prepTime, cookTime, image } = props.formData
    return (
        <form className="mainform" autocomplete="off" onSubmit={(e) => onSubmit(e)}>
            <h3>Add Recipe</h3>
            <input
                value={name}
                name='name'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Name of Dish"
            />
            <input
                value={ingredients}
                name='ingredients'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Ingredients (seperate by comma)"
                className="ingredients"
            />
            <input
                value={directions}
                name='directions'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Directions (seperate by comma)"
                className="directions"
            />
            <input
                value={prepTime}
                name='prepTime'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Prep Time (in min)"
            />
            <input
                value={cookTime}
                name='cookTime'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Cook Time (in min)"
            />
            <input
                value={image}
                name='image'
                required={true}
                onChange={e => onChange(e)}
                placeholder="Image URL"
            />
            <button onClick={onClick}>
                Submit
            </button>
        </form>
    )
}

export default Form;