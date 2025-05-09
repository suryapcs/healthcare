import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Footer from './Footer';
import { useNavigation,CommonActions } from '@react-navigation/native';

const Diagnostics = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Julie',
      hospital: 'National Institute of Cancer Research & Hospital',
      specialty: 'Heart Specialist',
      image: require('./assets/doctor.png'),
    },
    {
      id: 2,
      name: 'Dr. Sarah',
      hospital: 'Apollo Hospital',
      specialty: 'Neurologist',
      image: require('./assets/girldoctor.png'),
    },
    {
      id: 3,
      name: 'Dr. Julie',
      hospital: 'Green Life Hospital',
      specialty: 'Heart Specialist',
      image: require('./assets/doctor.png'),
    },
    // Add more as needed...
  ];

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity
  onPress={() => {
    console.log("Back button pressed");
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
  }}
>
  <Image source={require('./icons/back.png')} style={styles.backIcon} />
</TouchableOpacity>


        <Text style={styles.headerTitle}>Doctors</Text>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setShowSearch(!showSearch)}
        >
          <Image source={require('./icons/search.png')} style={styles.iconMedium} />
        </TouchableOpacity>
      </View>

      {showSearch && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search doctor..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      )}

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {filteredDoctors.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard}>
            <View style={styles.imageContainer}>
              <Image source={doctor.image} style={styles.doctorImage} />
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>⭐ 4.5 (100+)</Text>
              </View>
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorDetails}>
                {doctor.hospital}
                <Text style={styles.specialist}> ({doctor.specialty})</Text>
              </Text>
              <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

export default Diagnostics;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    flex: 1,
    marginLeft: -24, // to offset center shift caused by back icon
  },
  
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMedium: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    color:'#FFFFFF',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  imageContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 4,
  },
  
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#444',
  },
  
  doctorInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  doctorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  
  doctorDetails: {
    fontSize: 13,
    color: '#555',
  },
  
  specialist: {
    color: '#00bcd4',
    fontWeight: '600',
  },
  
  bookNowButton: {
    backgroundColor: '#00bcd4',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
    width:250,
  },
  
  bookNowButtonText: {
    color: '#fff',
    fontWeight: '700',
    left:75
  },
   
});  
