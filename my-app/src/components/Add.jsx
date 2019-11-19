import React, { Component } from 'react'
import Form from './Form'
import { api } from '../services/ApiConfig';

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      ingredients: [],
      directions: [],
      prepTime: '',
      cookTime: '',
      image: '',
      errorMsg: '',
    }
  }



  handleSubmit = (e) => {
    e.preventDefault()
    const {name, ingredients, directions, prepTime, cookTime, image} = this.state
    const data = {
      name,
      ingredients: [],
      directions: [],
      prepTime: '',
      cookTime: '',
      image: '',
    }
    api.post('/recipes', data)
    .then((res) => res.status === 201 ? this.props.history.push('/recipes') : null)
    .catch(() => this.setState({errorMsg : 'There was an error!'}))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, ingredients, directions, cookTime, prepTime, image } = this.state
    return (
      <div className="form">
        <h3>Add Recipe</h3>
        <Form
          formData={{ name, ingredients, directions, prepTime, cookTime, image }}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {this.state.errorMsg ? (
          <p className="error-text">{this.state.errorMsg}</p>
        ) : null}
      </div>
    )
  }
}
