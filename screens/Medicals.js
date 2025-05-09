import React,{useState} from 'react';
import { View,ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const Doctor = () => {  
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

  const pharmacy = [
    {
        title: 'abc',
        location: 'tenkasi.',
      time: '299',
      image: require('./assets/def.png'),
    },
    {
        title: 'applo',
        location: 'Surandai',
        time: '11pm',
      image: require('./assets/gh.png'),
    },
    {
        title: 'AWE',
        location: 'Boosts immunity and fights infections.',
        time: '10pm',
      image: require('./assets/def.png'),
    },
    {
        title: 'IND',
        location: 'Protects and covers minor wounds.',
        time: '24*7',
      image: require('./assets/gh.png'),
    },
  ];

  const pharmacyItems = pharmacy.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <View style={styles.container}>

<View style={styles.headerContainer}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image source={require('./icons/back.png')} style={styles.backIcon} />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Pharmacy</Text>

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
  <View style={styles.cardContainer}>
            {pharmacyItems.map((service, index) => (
              <View key={index} style={styles.card}>
                <Image source={service.image} style={styles.cardIcon} />
                <Text style={styles.cardTitle}>{service.title}</Text>
                <Text style={styles.cardSubtitle}>{service.location}</Text>
                <Text style={styles.cardPrice}>{service.time}</Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
</ScrollView>
        <Footer navigation={navigation} />
</View>
  );
};

export default Doctor;

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
  iconMedium: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    color:'#FFFFFF',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },
  
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  
  cardIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  
  cardSubtitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginVertical: 6,
  },
  
  cardPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  
  bookButton: {
    backgroundColor: '#00bcd4',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  
  bookButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  
});