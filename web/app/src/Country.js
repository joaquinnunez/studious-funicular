import React from 'react';

const t = {
  code: 'Code',
  name: 'Name',
  continent: 'Continent',
  region: 'Region',
  surfacearea: 'Surface area',
  indepyear: 'Independence Day',
  population: 'Population',
  lifeexpectancy: 'Life Expectancy',
  gnp: 'Gross National Product',
  gnpold: 'Old Gross National Product',
  localname: 'Local name',
  governmentform:  'Goverment form',
  headofstate: 'Head of State',
  capital: 'Capital *',
  code2: 'Code 2',
}

class Country extends React.Component {
  render() {
    const data = this.props.data
    return (
      <React.Fragment>
        <h2>{data.name}</h2>
        <table className="table">
          <tbody>
          {Object.keys(data).
                  map(k => <tr key={k}><th scope="row">{t[k]}</th><td>{data[k]}</td></tr>)
          }
          </tbody>
        </table>
        <h2>Cities of {data.name}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>District</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
          {this.props.cities.map(city => <tr key={city.id}>
                                           <td>{city.name} {city.id === data.capital && '*'}</td>
                                           <td>{city.district}</td>
                                           <td>{city.population}</td>
                                         </tr>)
          }
          </tbody>
        </table>
        <h2>Languages of {data.name}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Is official</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
          {this.props.languages.map(lang => <tr key={lang.id}>
                                              <td>{lang.language}</td>
                                              <td>{lang.isofficial}</td>
                                              <td>{lang.percentage}</td>
                                            </tr>)
          }
          </tbody>
        </table>
      </React.Fragment>
    )

  }
}

export default Country
