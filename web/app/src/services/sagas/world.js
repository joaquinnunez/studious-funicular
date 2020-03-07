import { call, put } from 'redux-saga/effects'
import WorldActions from '../reducers/WorldRedux'

export function * fetch (api, action) {
  const response = yield call(api.fetch)
  yield put(WorldActions.fetchOk(response.data))
}
