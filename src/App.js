import React from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {PrivateRoute, PageNotFound} from './pages';
import {
	Home,
	Career,
	Gallery,
	Alumni,
	ContactUs
} from './pages/web';
import {
    History,
    Administrators,
    AwardsAndRecognition,
    Facilities,
    MissionVisionGoal,
    OrganizationalStructure,
    StArnoldsPrayer,
    TheHymn,
    TheJingle,
    TheSeal
} from './pages/web/AboutUs';
import {
	Admission,
	OnlineEnrollment,
	GradeSchool,
	JuniorHighSchool,
	FreeSecondaryDistanceProgram,
	SeniorHighSchool,
	College,
	GraduateSchool,
	Scholarship
} from './pages/web/Admission';
import {
	GradeSchoolDepartment,
	JuniorHighSchoolDepartment,
	FreeSecondaryDistanceProgramDepartment,
	SeniorHighSchoolDepartment,
	CollegeDepartment,
	SchoolOfNursing,
	SchoolOfHospitalityManagement,
	SchoolOfEducationArtsAndSciences,
	SchoolOfEngineeringAndComputerStudies,
	SchoolOfBusinessManagementAndAccountancy,
	GraduateSchoolOfBusinessAndManagement
} from './pages/web/Academics';
import {
	CommunityExtensionServices,
	StudentAffairsOrganization,
	GradeSchoolSao,
	JuniorHighSchoolSao,
	SeniorHighSchoolSao,
	CollegeSao,
	Athletics,
	Publication,
	CampusMinistry,
	SerbisyongDivine,
	Registrar,
	Library,
	ManageResearch,
	Clinic,
	Canteen
} from './pages/web/StudentServices';
import {
	Updates,
	Calendar,
	ManageAnnouncements,
	ManageNewsAndEvents,
} from './pages/web/Updates';

const useStyles = makeStyles({
    app: {
		width: '100%',
		minHeight: '100vh',
		height: 'auto',
    }
});

const App = () => {
	
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

				{/* Academics Pages */}
				<Route path="/academics/grade-school-department" exact component={GradeSchoolDepartment} />
				<Route path="/academics/junior-high-school-department" exact component={JuniorHighSchoolDepartment} />
				<Route path="/academics/free-secondary-distance-program" exact component={FreeSecondaryDistanceProgramDepartment} />
				<Route path="/academics/senior-high-school-department" exact component={SeniorHighSchoolDepartment} />
				<Route path="/academics/college" exact component={CollegeDepartment} />
				<Route path="/academics/school-of-nursing" exact component={SchoolOfNursing} />
				<Route path="/academics/school-of-hospitality-management" exact component={SchoolOfHospitalityManagement} />
				<Route path="/academics/school-of-education,-arts-and-sciences" exact component={SchoolOfEducationArtsAndSciences} />
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
				<Route path="/student-services/research" exact component={ManageResearch} />
				<Route path="/student-services/research/:pdf" exact component={ManageResearch} />
				<Route path="/student-services/clinic" exact component={Clinic} />
				<Route path="/student-services/canteen" exact component={Canteen} />

				<Route path="/career" exact component={Career} />
				<Route path="/gallery" exact component={Gallery} />

				{/* Updates Pages */}
				<Route path="/updates" exact component={Updates} />
				<Route path="/updates/calendar" exact component={Calendar} />
				<Route path="/updates/announcements" exact component={ManageAnnouncements} />
				<Route path="/updates/announcements/:announcement" exact component={ManageAnnouncements} />
				<Route path="/updates/news-and-events" exact component={ManageNewsAndEvents} />
				<Route path="/updates/news-and-events/:newsAndEvent" exact component={ManageNewsAndEvents} />

				<Route path="/contact-us" exact component={ContactUs} />
				<Route path="/alumni" exact component={Alumni} />	 
				
				{/* Dashboard Pages */}
				<Route path='/dashboard'><PrivateRoute /></Route>

				<Route exact component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
