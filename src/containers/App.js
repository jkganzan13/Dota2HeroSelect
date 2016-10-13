import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { fetchHeroes } from '../actions'
import Hero from '../components/Hero'
import Logo from '../components/Logo'


class App extends Component {
  // constructor(props){
  // 	super(props)
  // }

  componentDidMount(){
  	const { dispatch } = this.props;
  	dispatch(fetchHeroes());
  }

  render() {
  	const { heroes, isLoading } = this.props;
  	
    return (
      <div>
      	{isLoading && <Logo />}

      	{_.map(heroes, (hero, index) => 
     			<Hero heroName={ hero.name } key={index} />
      	)}
      </div>
    );	
  }
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    heroes: state.dota2.heroes,
    isLoading: state.dota2.isLoading
  }
}

export default connect(mapStateToProps)(App)
