import {configureStore} from '@reduxjs/toolkit'

import {categoryApi} from './slice/categorySlice'

export const store = configureStore({
    reducer:{
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
})

setupListeners(store.dispatch)