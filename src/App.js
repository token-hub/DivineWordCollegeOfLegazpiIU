import React, { useEffect } from 'react'
import './App.css';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import axios from 'axios';
import Button from '@material-ui/core/Button';


const App = props => {

	useEffect(()=>{
		axios.get('http://127.0.0.1:8000/api/test')
		.then(response => console.log(response.data))
		.catch(e => console.log(e));
	});

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p className='text-red-500'>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
				</a>
				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</header>
		</div>
	);
}

export default App;
