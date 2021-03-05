import GlobalStyle from "./styles/GlobalStyles"
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import MainAreaPage from "./pages/MainAreaPage";
import TeacherMainAreaPage from "./pages/TeacherMainAreaPage";
import SetAssessmentPage from "./pages/SetAssessmentPage";
import SubjectsPage from "./pages/SubjectsPage";
import TestPanePage from "./pages/TestPanePage";
import ScorePage from "./pages/ScorePage";
import ResultOverviewPage from "./pages/ResultOverviewPage";
import Hamburger from "./components/Hamburger";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";
import CreateAssessmentPage from "./pages/CreateAssessmentPage";
import VideoLessonsPage from "./pages/VideoLessonsPage";


const App = () => {
  const [logState, setLogState] = useState(false)
  return (
    <div className="app">
      <GlobalStyle />
      <Router>
        <Header logState={logState} setLogState={setLogState} />
        <SideDrawer />
        <Switch>
          <Route path='/resultoverview' component={ResultOverviewPage} />
          <Route path='/scorepage' component={ScorePage} />
          <Route path='/testpane' component={TestPanePage} />
          <Route path='/subjects' component={SubjectsPage} />
          <Route path='/mainarea' component={MainAreaPage} />
          <Route path='/teachermainarea' component={TeacherMainAreaPage} />
          <Route path='/createassessment' component={CreateAssessmentPage} />
          <Route path='/setassessment' component={SetAssessmentPage} />
          <Route path='/videolessons' component={VideoLessonsPage} />
          <Route path='/signin'>
            <SignInPage setLogState={setLogState} />
          </Route>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
