import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageFrame}>
        <Image 
          source={''}
          style={styles.profileImage} 
        />
      </View>
      <Text style={styles.name}>Nombre: Jesus Ayala</Text>
      <Text style={styles.email}>Email: JesusAy0504@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
  },
  imageFrame: {
    padding: 8,
    borderWidth: 3,
    borderColor: '#41a220',
    borderRadius: 85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#2c312c',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: '#41a220',
  },
});

export default Perfil;