import React,{useState} from 'react';
import { View,ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const Doctor = () => {  
  const navigation = useNavigation();
   const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

   
  const Categories = [
    {
      title: 'Cardiologist',
      subtitle: 'Consult a doctor anytime,\nanywhere.',
      image: require('./assets/d1.png'),
    },
    {
      title: 'Neurologist',
      subtitle: 'Serving your health needs is\nour priority.',
      image: require('./assets/d2.png'),
    },
    {
      title: 'Obstetrician/\ngynecologist',
      subtitle: 'Done with labs? We’re here\nto give you the analysis.',
      image: require('./assets/d4.png'),
    },
    {
      title: 'Radiologist',
      subtitle: 'Consult a doctor anytime,\nanywhere.',
      image: require('./assets/d3.png'),
    },
    {
      title: 'Cardiologist',
      subtitle: 'Consult a doctor anytime,\nanywhere.',
      image: require('./assets/doctors.png'),
    },
    {
      title: 'Cardiologist',
      subtitle: 'Consult a doctor anytime,\nanywhere.',
      image: require('./assets/d2.png'),
    },
    {
      title: 'Cardiologist',
      subtitle: 'Consult a doctor anytime,\nanywhere.',
      image: require('./assets/d1.png'),
    },
  ];

  const doctorCategories = Categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
    
  return (
    <View style={styles.container}>

<View style={styles.headerContainer}>
  <TouchableOpacity onPress={() => navigation.navigate('Diagnostics')}>
    <Image source={require('./icons/back.png')} style={styles.backIcon} />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Categories</Text>

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
  {doctorCategories.map((item, index) => (
    <View style={styles.card} key={index}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      </View>
      <Image source={item.image} style={styles.cardImage} />
    </View>
  ))}
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
  card: {
    marginTop: 12,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#2F2F2F',
    fontSize: 19,
    fontWeight:600,
    lineHeight:30,
  },
  cardSubtitle: {
    color: '#808080',
    marginTop: 4,
    fontSize:14,
    fontWeight:500,
    lineHeight:18,
  },
  cardImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  bookNowButtonRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width:'25%',
  },
  bookNowText: {
    color: '#5B5B5B',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});