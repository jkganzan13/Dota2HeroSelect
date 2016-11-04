import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { fetchHeroes } from '../actions'

import Logo from '../components/Logo'
import HeroesContainer from './HeroesContainer'
import FilterContainer from './FilterContainer'


class App extends Component {
  // constructor(props){
  // 	super(props)
  // }

  componentDidMount(){
  	const { dispatch } = this.props;
  	dispatch(fetchHeroes());
  }

  renderContainers() {
    const { heroes } = this.props;
    let heroesContainer = []
    _.forOwn(heroes, (heroesByAttributes, attr) => 
      heroesContainer.push(<HeroesContainer heroesByAttributes={heroesByAttributes} attr={attr} key={attr} />)
    );
    return heroesContainer;
  }

  render() {
    const { isLoading } = this.props;
  	
    return (
      <div className="app">
      	{isLoading && <Logo />}
        {!isLoading && this.renderContainers()}
        <FilterContainer {...this.props} />
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
    activeFilters: state.dota2.activeFilters,
    heroes: state.dota2.heroes,
    isLoading: state.dota2.isLoading
  }
}

export default connect(mapStateToProps)(App)
