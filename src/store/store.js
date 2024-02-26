import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "../features/user/userSlice";

const persistConfig = {
  key: "user",
  storage,
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
  ],
});

const persistor = persistStore(store);

export { store, persistor };
