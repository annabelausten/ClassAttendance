import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./screens/HomePage";
import StylesPage from "./screens/StylesPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StylesPage"
          component={StylesPage}
          options={{ title: "Style Guide" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
