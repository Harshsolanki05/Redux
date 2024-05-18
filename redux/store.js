import { createStore, combineReducers} from 'redux';
import CountReducer from './reducer/countReducer';
import addCartReducer from './reducer/addCartReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
  product: addCartReducer
});

 
export const store = createStore(rootReducer);