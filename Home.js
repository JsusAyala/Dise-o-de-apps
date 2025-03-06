import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la Practica del Examen parcial 2</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuracion')}>
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ahorros')}>
        <Text style={styles.buttonText}>Ir a Ahorros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    padding: 30,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#41a220',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;