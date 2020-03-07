import { takeLatest, all } from 'redux-saga/effects'
import API from '../sources/api'

import { WorldTypes } from '../reducers/WorldRedux'
import { fetch } from './world'

const api = API.create()

export default function * root () {
  yield all([
    takeLatest(WorldTypes.FETCH, fetch, api)
  ])
}
