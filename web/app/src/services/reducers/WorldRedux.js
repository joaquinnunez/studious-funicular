import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetch: [],
  fetchOk: ['worldData']
})

export const WorldTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  continents: {},
})

export const fetch = (state) => state

export const fetchOk = (state, action) => {
  // {
  //  continentId: {
  //    regionId: [country1, country2, ...],
  //  }
  // }
  let data = {}
  for (let country of action.worldData.countries) {
    if (country.continent in data) {
      if (country.region in data[country.continent]) {
        data[country.continent][country.region].push(country)
      } else {
        data[country.continent][country.region] = [country]
      }
    } else {
        data[country.continent] = {}
        data[country.continent][country.region] = [country]
    }
  }
  return state.merge({ continents: data })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH]: fetch,
  [Types.FETCH_OK]: fetchOk
})
