import React,{useState} from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const Doctor = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

  const diagnosticServices = [
    {
      icon: require('./assets/covid.png'),
      title: 'Covid RT PCR',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 315',
    },
    {
      icon: require('./assets/cancer.png'),
      title: 'Cancer CheckUp',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 1000',
    },
    {
      icon: require('./assets/covid.png'),
      title: 'Covid RT PCR',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 315',
    },
    {
      icon: require('./assets/cancer.png'),
      title: 'Cancer CheckUp',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 1000',
    },
    {
      icon: require('./assets/cancer.png'),
      title: 'Covid RT PCR',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 315',
    },
    {
      icon: require('./assets/covid.png'),
      title: 'Cancer CheckUp',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 1000',
    },
    {
      icon: require('./assets/covid.png'),
      title: 'Covid RT PCR',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 315',
    },
    {
      icon: require('./assets/cancer.png'),
      title: 'Cancer CheckUp',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 1000',
    },
    {
      icon: require('./assets/cancer.png'),
      title: 'Covid RT PCR',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 315',
    },
    {
      icon: require('./assets/covid.png'),
      title: 'Cancer CheckUp',
      subtitle: 'Known as Covid - 19 Virus Quantitative Pcr',
      price: '₹ 1000',
    },
  ];

  const filtereddiagnostic = diagnosticServices.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./icons/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Diagnostics</Text>

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
          {filtereddiagnostic.map((service, index) => (
            <View key={index} style={styles.card}>
              <Image source={service.icon} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardSubtitle}>{service.subtitle}</Text>
              <Text style={styles.cardPrice}>{service.price}</Text>
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
    width: 50,
    height: 50,
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