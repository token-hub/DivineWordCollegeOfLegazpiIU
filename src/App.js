import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/web/home';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    app: {
		width: '100%',
		minHeight: '100vh',
		height: 'auto',
    }
});

const App = props => {

	const { app } = useStyles();

	return (
		<div className={app}>
			<Switch>
				<Route path='/' exact component={Home} />
				{/*<Route path='/home/:page' exact render={ props => <Home2 {...props} /> } />*/}
			</Switch>
		</div>
	);
}

export default App;
