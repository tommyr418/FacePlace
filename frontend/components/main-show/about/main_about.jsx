import React from 'react';
import { Route } from 'react-router-dom';

import AboutCategories from './about_categories';
import AboutOverviewContainer from './about_overview_container';
import AboutWorkAndEducationContainer from
  './about_work_and_education_container';
import AboutPlacesYouveLivedContainer from
  './about_places_youve_lived_container';
import AboutContactContainer from './about_contact_container';
import AboutDetailsAboutYouContainer from
  './about_details_about_you_container';
import AboutForm from './about_form';

class MainAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    if(this.props.currentUser.id === this.props.user.id) {
      this.setState({
        modalOpen: true,
      });
    }
  }

  closeModal(){
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div id="main-about">
        <div id="main-about-title">
          <a>About</a>

          <button onClick={ this.openModal }>
            Add Info
          </button>
        </div>

        <div id="main-about-content">
          <AboutCategories userId={this.props.userId}/>
          <Route exact path="/users/:userId/about"
            component={ AboutOverviewContainer }/>
          <Route path="/users/:userId/about/workAndEducation"
            component={ AboutWorkAndEducationContainer }/>
          <Route path="/users/:userId/about/placesYouveLived"
            component={ AboutPlacesYouveLivedContainer }/>
          <Route path="/users/:userId/about/contactAndBasicInfo"
            component={ AboutContactContainer }/>
          <Route path="/users/:userId/about/detailsAboutYou"
            component={ AboutDetailsAboutYouContainer }/>
        </div>

        { this.state.modalOpen ?
          <div className="modal">
            <div className="modal-content">
              <button onClick={ this.closeModal }
                className="close">
                close
              </button>
              <AboutForm />
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default MainAbout;
