import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleWare = createSagaMiddleware();

// mount it on the store
export default createStore(
                  reducer, 
                  applyMiddleware(sagaMiddleWare)
            );

//run the saga
sagaMiddleWare.run(mySaga);

// render the application 