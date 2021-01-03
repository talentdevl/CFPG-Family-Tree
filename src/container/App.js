import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import * as urls from '../urls';

import './App.css';
import Base from '../hoc/Base';
import Main from '../modules/Main';
import FrequentlyAskedQuestions from '../modules/FrequentlyAskedQuestions';
import Gallery from '../modules/Gallery';
import TimelineEvents from '../modules/TimelineEvents';
import { Page404, Page500 } from '../components/ErrorPages';
import ComingSoon from '../components/ComingSoon';
import Lineage from '../modules/Lineage';
import UserSettings from '../modules/UserSettings';
import Members from '../modules/Members';
import Artifacts from '../modules/Artifacts';

class App extends Component {
  state = {
    photos: new Array(20).fill('').map((element, i) => `photo ${i+1}`),
  }

  render() {
    console.log('main props', this.props);
    return (
      <div className="App">
        <Base>
          <Router>
            <div>
              {/* <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/faq">Frequently Asked Questions</Link>
                  </li>
                  <li>
                    <Link to="/member">Family Member Page Example</Link>
                  </li>
                  <li>
                    <Link to="/timeline">Past Family Events</Link>
                  </li>
                  <li>
                    <Link to="/user">User Settings Example</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon">Coming Soon Page</Link>
                  </li>
                  <li>
                    <Link to="/lineage">Lineage (under construction)</Link>
                  </li>
                  <li>
                    <Link to="/404">Not Found Page</Link>
                  </li>
                  <li>
                    <Link to="/500">Server Error Page</Link>
                  </li>
                </ul>
              </nav> */}

              <Switch>
                <Route path={urls.faqUrl}>
                  <FrequentlyAskedQuestions questions={this.props.questions} />
                </Route>
                <Route path={urls.memberUrl}>
                  <Members members={this.props.members} />
                </Route>
                <Route path={urls.timelineUrl}>
                  <TimelineEvents timelineEvents={this.props.timelineEvents} />
                </Route>
                <Route path={urls.userUrl}>
                  <UserSettings firstName="Harry" lastName="Potter" email="halfbloodprince@gmail.com" {...this.state} />
                </Route>
                <Route path={urls.comingSoonUrl}>
                  <ComingSoon />
                </Route>
                <Route path={urls.lineageUrl}>
                  <Lineage name={this.state.firstName} birth={this.state.birth} death={this.state.death} parents={[this.props.members[9].primaryParentId, this.props.members[9].secondaryParentId]} />
                  {/* <Redirect to={urls.comingSoonUrl} /> */}
                </Route>
                <Route path={urls.notFoundUrl}>
                  <Page404 />
                </Route>
                <Route path={urls.serverErrorUrl}>
                  <Page500 />
                </Route>
                <Route path={urls.galleryUrl}>
                  <Gallery />
                </Route>
                <Route path={urls.artifactsUrl}>
                  <Artifacts />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </div>
          </Router>
        </Base>
      </div>
    );
  }
}


{/* <Login /> */}
{/* <Signup /> */}
{/* <AddMemberModal /> */}
{/* <EditMemberPageModal firstName="Oscar" /> */}
{/* <AddEventModal /> */}
{/* <Header /> */}
{/* <Footer /> */}
{/* <Gallery photos={this.state.photos} /> */}

const mapStateToProps = state => ({
  members: state.members,
  questions: state.questions,
  timelineEvents: state.timelineEvents
});

export default connect(mapStateToProps)(App);
