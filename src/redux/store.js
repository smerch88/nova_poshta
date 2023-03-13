import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { departmentsReducer } from './departments/departments-slice';
import { tnnReducer } from './tnn/tnn-slice';

const departmentsPersistConfig = {
  key: 'departments',
  blacklist: [''],
  storage,
};

const tnnPersistConfig = {
  key: 'tnn',
  blacklist: [''],
  storage,
};

const persistedReducer = persistReducer(
  departmentsPersistConfig,
  departmentsReducer
);
const persistedTnnReducer = persistReducer(tnnPersistConfig, tnnReducer);

export const store = configureStore({
  reducer: {
    departments: persistedReducer,
    tnn: persistedTnnReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
