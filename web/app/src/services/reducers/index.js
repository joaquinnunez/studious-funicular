import { combineReducers } from 'redux'
import configureStore from '../stores'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    world: require('./WorldRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
