import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from './components/Categories'
import Main from './components/Main'
import Add from './components/Add'
import Recipe from './components/Recipe'

export const Routes = (props) => {
	return (
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/categories' component={Categories} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/recipe' component={Recipe} />
		</Switch>
	)
}
