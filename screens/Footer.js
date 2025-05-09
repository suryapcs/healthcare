import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Home')}>
        <Icon name="home-outline" size={24} color="#333" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Appointment')}>
        <Icon name="calendar-outline" size={24} color="#333" />
        <Text style={styles.iconText}>Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Chat')}>
        <Icon name="chatbubble-ellipses-outline" size={24} color="#333" />
        <Text style={styles.iconText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Profile')}>
        <Icon name="person-outline" size={24} color="#333" />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    // paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
});

export default Footer;
