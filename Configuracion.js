import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Configuracion = ({ navigation }) => {
  const showAlert = (setting) => {
    Alert.alert(
      "Configuración", 
      `Has seleccionado: ${setting}`,
      [{ text: "OK", onPress: () => console.log(`${setting} seleccionado`) }]
    );
  };

  const configOptions = [
    {
      id: 'theme',
      title: 'Cambiar Tema',
      icon: 'color-palette-outline',
      description: 'Modo claro u oscuro'
    },
    {
      id: 'language',
      title: 'Cambiar Idioma',
      icon: 'globe-outline',
      description: 'Español, Inglés, Francés'
    },
    {
      id: 'notifications',
      title: 'Notificaciones',
      icon: 'notifications-outline',
      description: 'Activar o desactivar notificaciones'
    },
    {
      id: 'privacy',
      title: 'Privacidad',
      icon: 'lock-closed-outline',
      description: 'Configuración de privacidad'
    },
    {
      id: 'sound',
      title: 'Sonido',
      icon: 'volume-high-outline',
      description: 'Ajustes de sonido'
    },
    {
      id: 'account',
      title: 'Cuenta',
      icon: 'person-outline',
      description: 'Gestionar tu cuenta'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configuración</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {configOptions.map((option) => (
          <TouchableOpacity 
            key={option.id}
            style={styles.option} 
            onPress={() => showAlert(option.title)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={option.icon} size={24} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>{option.title}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#aaa" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  header: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a3a',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  optionDescription: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 3,
  },
});

export default Configuracion;