import React, { Component, PropTypes } from 'react'
import { Grid } from 'react-flexbox-grid/lib/index'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { fetchHeroes } from '../actions'

import Logo from '../components/Logo'
import HeroesContainer from './HeroesContainer'
import FilterContainer from './FilterContainer'

class App extends Component {
  constructor(props){
  	super(props);
    this.isFilterActive = this.isFilterActive.bind(this);
  }

  componentDidMount(){
  	this.props.dispatch(fetchHeroes());
  }

  isFilterActive() {
    return this.props.activeFilters.length > 0;
  }

  render() {
    const { heroes, isLoading } = this.props;
  	
    return (
      <Grid>
      	{isLoading && <Logo />}
        <div style={{ display: (isLoading) ? 'none' : ''}}>
          <HeroesContainer attr={'STRENGTH'} heroesByAttributes={heroes['STRENGTH']} isFilterActive={this.isFilterActive} />
          <HeroesContainer attr={'AGILITY'} heroesByAttributes={heroes['AGILITY']} isFilterActive={this.isFilterActive} />
          <HeroesContainer attr={'INTELLIGENCE'} heroesByAttributes={heroes['INTELLIGENCE']} isFilterActive={this.isFilterActive} />
          <FilterContainer {...this.props} />
        </div>
      </Grid>
    );	
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  heroes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    activeFilters: state.dota2.activeFilters,
    heroes: state.dota2.heroes,
    isLoading: state.dota2.isLoading
  }
};

export default connect(mapStateToProps)(App)
