import {
  indexedDBLocalPersistence,
  initializeAuth,
  type Auth,
  getAuth,
} from "firebase/auth";
import { getApp } from "firebase/app";
import { Capacitor } from "@capacitor/core";

let auth: Auth;
export function useFbAuth() {
  if (!auth) {
    if (Capacitor.isNativePlatform()) {
      auth = initializeAuth(getApp(), {
        persistence: indexedDBLocalPersistence,
      });
    } else {
      auth = getAuth();
    }
  }
  return auth;
}
