import { call, put } from 'redux-saga/effects'
import WorldActions from '../reducers/WorldRedux'

export function * fetch (api, action) {
  const response = yield call(api.fetch)
  yield put(WorldActions.fetchOk(response.data))
}

export function * fetchCities (api, action, countryCode) {
  const response = yield call(api.fetchCities, action.countryCode)
  yield put(WorldActions.fetchCitiesOk(response.data))
}
