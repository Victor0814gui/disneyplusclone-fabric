import * as React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SignInStepOneScreen } from "./screens/SigninStepOneScreen";


export const routesName = {
  welcomeScreen: "/",
  signInStepOneScreen: "/signInStepOneScreen"
}

export function AppRouter() {
  return (
    <NativeRouter>
      <Routes>
        <Route path={routesName.welcomeScreen} Component={WelcomeScreen} />
        <Route path={routesName.signInStepOneScreen} Component={SignInStepOneScreen} />
      </Routes>
    </NativeRouter>
  );
}