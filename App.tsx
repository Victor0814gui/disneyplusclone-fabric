import React from "react";
import { AppRouter } from "./src/routes";
import { View } from "react-native";

 
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#1a1c29', }}>
      <AppRouter/>
    </View>
  )
}
 