import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { isDev } from './index'
import rootReducer from '../reducers';

const configureStore = initialState => {

    const devToolsCompose = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_;
    const composeEnhancer = (isDev() && devToolsCompose) || compose
    const middlewares = [thunk]

    if (isDev()) {
        middlewares.push(createLogger())
    }

    const store = createStore(rootReducer, initialState,
        composeEnhancer(applyMiddleware(...middlewares)))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            try {
                const newReducers = require("../reducers").default;
                store.replaceReducer(newReducers);
            } catch (err) {
                console.error(`Reducer hot reloading error ${err}`)
            }
        })
    }

    return store;
}

export { configureStore }
