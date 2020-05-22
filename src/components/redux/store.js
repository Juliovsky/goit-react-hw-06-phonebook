import {createStore} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import contactReducer from './contactReducer'
import {devToolsEnhancer} from "redux-devtools-extension";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

// export const store = createStore(persistedReducer, devToolsEnhancer());

export const store = configureStore({
    reducer: persistedReducer,

        middleware: getDefaultMiddleware({
    serializableCheck:false
})
}
);

export const persistor = persistStore(store)

