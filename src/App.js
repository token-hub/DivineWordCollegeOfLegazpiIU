import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {  useBasename } from 'history';

import Home from './components/web/home';
// about us pages imports
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
// admission pages imports
import Admission from './components/web/admission';
import OnlineEnrollment from './components/web/admission/onlineEnrollment';
import GradeSchool from './components/web/admission/gradeSchool';
import JuniorHighSchool from './components/web/admission/juniorHighSchool';
import FreeSecondaryDistanceProgram from './components/web/admission/freeSecondaryDistanceProgram';
import SeniorHighSchool from './components/web/admission/seniorHighSchool';
import College from './components/web/admission/college';
import GraduateSchool from './components/web/admission/graduateSchool';
import Scholarship from './components/web/admission/scholarship';
// academics pages imports
import GradeSchoolDepartment from './components/web/academics/gradeSchoolDepartment';
import JuniorHighSchoolDepartment from './components/web/academics/juniorHighSchoolDepartment';
import FreeSecondaryDistanceProgramDeparment from './components/web/academics/freeSecondaryDistanceProgramDepartment';
import SeniorHighSchoolDepartment from './components/web/academics/seniorHighSchoolDepartment';
import CollegeDepartment from './components/web/academics/collegeDepartment';
import SchoolOfNursing from './components/web/academics/schoolOfNursing';
import SchoolOfHospitalityManagement from './components/web/academics/schoolOfHospitalityManagement';
import SchoolOfEducationArtsAndSciences from './components/web/academics/schoolOfEducationArtsAndSciences';
import SchoolOfEngineeringAndComputerStudies from './components/web/academics/schoolOfEngineeringAndComputerStudies';
import SchoolOfBusinessManagementAndAccountancy from './components/web/academics/schoolOfBusinessManagementAndAccountancy';
import GraduateSchoolOfBusinessAndManagement from './components/web/academics/graduateSchoolOfBusinessAndManagement';
// student services pages imports
import CommunityExtensionServices from './components/web/studentServices/communityExtensionServices';
import StudentAffairsOrganization from './components/web/studentServices/studentAffairsOrganization';
import GradeSchoolSao from './components/web/studentServices/gradeSchoolSao';
import JuniorHighSchoolSao from './components/web/studentServices/juniorHighSchoolSao';
import SeniorHighSchoolSao from './components/web/studentServices/seniorHighSchoolSao';
import CollegeSao from './components/web/studentServices/collegeSao';
import Athletics from './components/web/studentServices/athletics';
import Publication from './components/web/studentServices/publication';
import CampusMinistry from './components/web/studentServices/campusMinistry';
import SerbisyongDivine from './components/web/studentServices/serbisyongDivine';
import Registrar from './components/web/studentServices/registrar';
import Library from './components/web/studentServices/library';
import Research from './components/web/studentServices/research';
import Clinic from './components/web/studentServices/clinic';
import Canteen from './components/web/studentServices/canteen';

import Career from './components/web/career';
import Gallery from './components/web/gallery';

// updates services pages imports
import Updates from './components/web/updates';
import Calendar from './components/web/updates/calendar';
import Announcement from './components/web/updates/announcement';
import NewsAndEvents from './components/web/updates/newsAndEvents';

import ContactUs from './components/web/contactUs';
import Alumni from './components/web/alumni';

// dashbaord pages imports
import Login from './components/dashboard/authentication/login';
import Register from './components/dashboard/authentication/register';
import HomeDashboard from './components/dashboard/homeDashboard';
import Roles from './components/dashboard/roles';
import AnnouncementDashboard from './components/dashboard/announcementDashboard';

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
				
				{/* About Us Pages */}
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

				{/* Admission Pages */}
				<Route path="/admission" exact component={Admission} />
				<Route path="/admission/online-enrollment" exact component={OnlineEnrollment} />
				<Route path="/admission/grade-school" exact component={GradeSchool} />
				<Route path="/admission/junior-high-school" exact component={JuniorHighSchool} />
				<Route path="/admission/free-secondary-distance-program" exact component={FreeSecondaryDistanceProgram} />
				<Route path="/admission/senior-high-school" exact component={SeniorHighSchool} />
				<Route path="/admission/college" exact component={College} />
				<Route path="/admission/graduate-school" exact component={GraduateSchool} />
				<Route path="/admission/scholarship" exact component={Scholarship} />

				{/* Acadamics Pages */}
				<Route path="/academics/grade-school-department" exact component={GradeSchoolDepartment} />
				<Route path="/academics/junior-high-school-department" exact component={JuniorHighSchoolDepartment} />
				<Route path="/academics/free-secondary-distance-program" exact component={FreeSecondaryDistanceProgramDeparment} />
				<Route path="/academics/senior-high-school-department" exact component={SeniorHighSchoolDepartment} />
				<Route path="/academics/college" exact component={CollegeDepartment} />
				<Route path="/academics/school-of-nursing" exact component={SchoolOfNursing} />
				<Route path="/academics/school-of-hospitality-management" exact component={SchoolOfHospitalityManagement} />
				<Route path="/academics/school-of-education-arts-and-sciences" exact component={SchoolOfEducationArtsAndSciences} />
				<Route path="/academics/school-of-engineering-and-computer-studies" exact component={SchoolOfEngineeringAndComputerStudies} />
				<Route path="/academics/school-of-business-management-and-accountancy" exact component={SchoolOfBusinessManagementAndAccountancy} />
				<Route path="/academics/graduate-school-of-business-and-management" exact component={GraduateSchoolOfBusinessAndManagement} />


				{/* Student services Pages */}
				{/* <Route path="/student-services" exact component={StudentServices} /> */}
				<Route path="/student-services/community-extension-services" exact component={CommunityExtensionServices} />
				<Route path="/student-services/student-affairs-organization" exact component={StudentAffairsOrganization} />
				<Route path="/student-services/grade-school" exact component={GradeSchoolSao} />
				<Route path="/student-services/junior-high-school" exact component={JuniorHighSchoolSao} />
				<Route path="/student-services/senior-high-school" exact component={SeniorHighSchoolSao} />
				<Route path="/student-services/college" exact component={CollegeSao} />
				<Route path="/student-services/athletics" exact component={Athletics} />
				<Route path="/student-services/publication" exact component={Publication} />
				<Route path="/student-services/campus-ministry" exact component={CampusMinistry} />
				<Route path="/student-services/serbisyong-divine" exact component={SerbisyongDivine} />
				<Route path="/student-services/registrar" exact component={Registrar} />
				<Route path="/student-services/library" exact component={Library} />
				<Route path="/student-services/research" exact component={Research} />
				<Route path="/student-services/clinic" exact component={Clinic} />
				<Route path="/student-services/canteen" exact component={Canteen} />

				<Route path="/career" exact component={Career} />
				<Route path="/gallery" exact component={Gallery} />

				{/* Updates Pages */}
				<Route path="/updates" exact component={Updates} />
				<Route path="/updates/calendar" exact component={Calendar} />
				<Route path="/updates/announcement" exact component={Announcement} />
				<Route path="/updates/news-and-events" exact component={NewsAndEvents} />

				<Route path="/contact-us" exact component={ContactUs} />
				<Route path="/alumni" exact component={Alumni} />	

				{/* ============= [ Dashboard pages ] ============= */}
				<Route path="/dashboard/login" exact component={Login} />
				<Route path="/dashboard/register" exact component={Register} />
				<Route path="/dashboard/home" exact component={HomeDashboard} />
				<Route path="/dashboard/roles" exact component={Roles} />
				<Route path="/dashboard/announcement" exact component={AnnouncementDashboard} />
				
			</Switch>
		</div>
	);
}

export default App;
