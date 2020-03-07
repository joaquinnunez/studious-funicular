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
  capital: 'Capital',
  code2: 'Code 2',
}

class Country extends React.Component {
  render() {
    const data = this.props.data
    return (<table className="table">
      <tbody>
      {Object.keys(data).
              map(k => <tr key={k}><th scope="row">{t[k]}</th><td>{data[k]}</td></tr>)
      }
      </tbody>
    </table>)
  }
}

export default Country
