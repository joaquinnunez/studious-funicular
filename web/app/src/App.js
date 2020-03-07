import React from 'react';
import { connect } from 'react-redux'
import WorldActions from './services/reducers/WorldRedux'
import Country from './Country'
import './App.css'


class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedContinent: false,
      selectedRegion: false,
      selectedCountry: false,
    }
  }

  componentDidMount() {
    this.props.fetch()
  }

  continents() {
    return (<React.Fragment>
              <h2>Continents</h2>
              <ul className="list-group">
                {Object.keys(this.props.world.continents).
                        map(c => <li onClick={() => this.selectContinent(c)} key={c} className="list-group-item">{c}</li>)
                }
              </ul>
            </React.Fragment>
           )
  }

  selectContinent(continent) {
    this.setState({selectedContinent: continent,
                   selectedRegion: false,
                   selectedCountry: false,
                 })
  }

  regions() {
    if (this.state.selectedContinent !== false) {
      return (<React.Fragment>
                <h2>Regions</h2>
                <ul className="list-group">
                  {Object.keys(this.props.world.continents[this.state.selectedContinent]).
                          map(c => <li onClick={() => this.selectRegion(c)} key={c} className="list-group-item">{c}</li>)
                  }
                </ul>
              </React.Fragment>
             )
    }
    return null
  }

  selectRegion(region) {
    this.setState({selectedRegion: region,
                   selectedCountry: false,
                 })
  }

  countries() {
    if (this.state.selectedRegion !== false) {
      return (<React.Fragment>
                <h2>Countries</h2>
                <ul className="list-group">
                  {this.props.world.continents[this.state.selectedContinent][this.state.selectedRegion].
                        map(c => <li onClick={() => this.selectCountry(c)} key={c.name} className="list-group-item">{c.name}</li>)
                  }
                </ul>
              </React.Fragment>
             )
    }
    return null
  }

  selectCountry(country) {
    this.setState({selectedCountry: country})
  }

  country() {
    if (this.state.selectedCountry !== false) {
      const countryData = this.state.selectedCountry
      return <Country data={countryData}/>
    }
    return null
  }

  render() {
    return (
      <div className="App">
        {this.continents()}
        {this.regions()}
        {this.countries()}
        {this.country()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(WorldActions.fetch())
  }
}

function mapStateToProps(state) {
  console.log(state)
  const props = {
    world: state.world
  }
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
