import { takeLatest, all } from 'redux-saga/effects'
import API from '../sources/api'

import { WorldTypes } from '../reducers/WorldRedux'
import { fetch, fetchCities } from './world'

const api = API.create()

export default function * root () {
  yield all([
    takeLatest(WorldTypes.FETCH, fetch, api),
    takeLatest(WorldTypes.FETCH_CITIES, fetchCities, api)
  ])
}
