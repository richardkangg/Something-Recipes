import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from './components/Categories'
import Main from './components/Main'
import Add from './components/Add'

export const Routes = (props) => {
	return (
		<Switch>
			{/* <Route exact path='/' component={Main} /> */}
			<Route exact path='/' component={Categories} />
            <Route exact path='/add' component={Add} />
		</Switch>
	)
}
