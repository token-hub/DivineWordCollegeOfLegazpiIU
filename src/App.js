import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/web/home';
import History from './components/web/aboutUs/history';
import TheSeal from './components/web/aboutUs/theSeal';
import MissionVisionGoal from './components/web/aboutUs/missionVisionGoal';
import TheHymn from './components/web/aboutUs/theHymn';
import TheJingle from './components/web/aboutUs/theJingle';
import StArnoldsPrayer from './components/web/aboutUs/stArnoldsPrayer';
import Administrators from './components/web/aboutUs/administrators';
import Facilities from './components/web/aboutUs/facilities';
import OrganizationalStructure from './components/web/aboutUs/organizationalStructure';
import AwardsAndRecognition from './components/web/aboutUs/awardsAndRecognition';
import Admission from './components/web/admission';
import Academics from './components/web/academics';
import StudentServices from './components/web/studentServices';
import Career from './components/web/career';
import Gallery from './components/web/gallery';
import Updates from './components/web/updates';
import ContactUs from './components/web/contactUs';
import Alumni from './components/web/alumni';

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
				<Route path="/" exact component={Home} />
				<Route path="/about-us/history" exact component={History} />
				<Route path="/about-us/the-seal" exact component={TheSeal} />
				<Route path="/about-us/mission,-vision-&-goal" exact component={MissionVisionGoal} />
				<Route path="/about-us/the-hymn" exact component={TheHymn} />
				<Route path="/about-us/the-jingle" exact component={TheJingle} />
				<Route path="/about-us/st.arnold's-prayer" exact component={StArnoldsPrayer} />
				<Route path="/about-us/administrators" exact component={Administrators} />
				<Route path="/about-us/facilities" exact component={Facilities} />
				<Route path="/about-us/organizational-structure" exact component={OrganizationalStructure} />
				<Route path="/about-us/awards-&-recognition" exact component={AwardsAndRecognition} />

				<Route path="/admission" exact component={Admission} />
				<Route path="/academics" exact component={Academics} />
				<Route path="/student-services" exact component={StudentServices} />
				<Route path="/career" exact component={Career} />
				<Route path="/gallery" exact component={Gallery} />
				<Route path="/updates" exact component={Updates} />
				<Route path="/contact-us" exact component={ContactUs} />
				<Route path="/alumni" exact component={Alumni} />
				{/*<Route path="/home/:page" exact render={ props => <Home2 {...props} /> } />*/}
			</Switch>
		</div>
	);
}

export default App;
