import React from 'react'

const Form = (props) => {
    const {onChange, onSubmit, onClick, className, color, title, variant} = props
    const {name, ingredients, directions, prepTime, cookTime, image} = props.formData
    return (
        <form className="form" onSubmit={(e) => onSubmit(e)}>
            <input
      value={name}
      name='name'
      required={true}
      onChange={e => onChange(e)}
    />
    <input
      value={ingredients}
      name='ingredients'
      required={true}
      onChange={e => onChange(e)}
    />
    <input
      value={directions}
      name='directions'
      required={true}
      onChange={e => onChange(e)}
    />
    <input
      value={prepTime}
      name='prepTime'
      required={true}
      onChange={e => onChange(e)}
    />
    <input
      value={cookTime}
      name='cookTime'
      required={true}
      onChange={e => onChange(e)}
    />
    <input
      value={image}
      name='image'
      required={true}
      onChange={e => onChange(e)}
    />
    <button onClick={onClick} className={`button ${className} ${variant} ${color}`}>
        {title}
    </button>
        </form>
    )
}

export default Form;