import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { fetchHeroes } from '../actions'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import VerticalText from '../components/VerticalText'


class App extends Component {
  // constructor(props){
  // 	super(props)
  // }

  componentDidMount(){
  	const { dispatch } = this.props;
  	dispatch(fetchHeroes());
  }

  render() {
  	// const { strHeroes, agiHeroes, intHeroes, isLoading } = this.props;
    const { heroes, isLoading } = this.props;

    let heroesByAttributes = [];

    for (let attr in heroes) {
      if(heroes.hasOwnProperty(attr)) {
        heroesByAttributes.push(
          <div className="attributeContainer" key={attr}>
            <VerticalText attribute={attr} />
            <div className="heroContainer">
              {_.map(heroes[attr], (hero, index) => 
                <Hero heroName={ hero.name } key={index} />
              )}
            </div>
          </div>
        );
      }
    }
  	
    return (
      <div className="app">
      	{isLoading && <Logo />}
        {!isLoading && heroesByAttributes}
      </div>
    );	
  }
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired,
  heroes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    // strHeroes: state.dota2.strHeroes,
    // agiHeroes: state.dota2.agiHeroes,
    // intHeroes: state.dota2.intHeroes,
    heroes: state.dota2.heroes,
    isLoading: state.dota2.isLoading
  }
}

export default connect(mapStateToProps)(App)
