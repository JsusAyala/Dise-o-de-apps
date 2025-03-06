
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Ahorros from "./components/Ahorros";
import Perfil from "./components/Perfil"
import Configuracion from "./components/Configuracion"

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ahorros" component={Ahorros}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Configuracion" component={Configuracion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
