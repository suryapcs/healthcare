import React,{useState} from 'react';
import { View,ScrollView, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');


  const doctors = [
    {
      name: 'Dr. Julie',
      description: 'General Physician\nAbc Hospital New Delhi.',
      rating: '⭐ 4.5 (100+ Ratings)',
      experience: '🕒 5 Years',
      image: require('./assets/doctor.png'),
    },
    {
      name: 'Dr. Julie',
      description: 'General Physician\nAbc Hospital New Delhi.',
      rating: '⭐ 4.5 (100+ Ratings)',
      experience: '🕒 5 Years',
      image: require('./assets/girldoctor.png'),
    },
    {
      name: 'Dr. Julie',
      description: 'General Physician\nAbc Hospital New Delhi.',
      rating: '⭐ 4.5 (100+ Ratings)',
      experience: '🕒 5 Years',
      image: require('./assets/doctor.png'),
    },
  ];
  
  const diagnostics = [
    {
      name: 'Covid RT PCR',
      desc: 'Know as Covid - 19 Virus\nQuantitative Pcr',
      price: '₹315',
      image: require('./assets/covid.png'),
    },
    {
      name: 'Cancer Checkup',
      desc: 'Know as Covid - 19 Virus\nQuantitative Pcr.',
      price: '₹1000',
      image: require('./assets/cancer.png'),
    },
    {
      name: 'Cholesterol',
      desc: 'Know as Covid - 19 Virus\nQuantitative Pcr',
      price: '₹786',
      image: require('./assets/chole.png'),
    },
  ];
  
  const medicals = [
    {
      name: 'ABC Medical',
      location: 'Tenkasi',
      time: 'Close 11.30 pm',
      image: require('./assets/abc.png'),
    },
    {
      name: 'DEF Medical',
      location: 'Tenkasi',
      time: 'Close 11.30 pm',
      image: require('./assets/def.png'),
    },
    {
      name: 'GHI Medical',
      location: 'Tenkasi',
      time: 'Close 11.30 pm',
      image: require('./assets/gh.png'),
    },
  ];
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredDiagnostics = diagnostics.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredMedicals = medicals.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <View style={styles.container}>
  {/* Fixed Header */}
  <View style={styles.header}>
    <Image source={require('./assets/doctor.png')} style={styles.profileImage} />
    <View style={styles.locationContainer}>
      <Text style={styles.locationLabel}>Current Location</Text>
      <View style={styles.locationRow}>
        <Image source={require('./icons/location.png')} style={styles.iconSmall} />
        <Text style={styles.locationText}>Tenkasi, Tamil Nadu </Text>
        <Image source={require('./icons/down.png')} style={styles.iconTiny} />
      </View>
    </View>
    <TouchableOpacity style={styles.notificationIcon}>
      <Image source={require('./icons/bell.png')} style={styles.iconMedium} />
    </TouchableOpacity>
  </View>

  {/* Fixed Search Bar */}
  <View style={styles.searchBar}>
    <Image source={require('./icons/search.png')} style={styles.iconSmall} />
    <TextInput
  placeholder="Search"
  placeholderTextColor="#000"
  style={styles.searchInput}
  value={searchQuery}
  onChangeText={(text) => setSearchQuery(text)}
/>
  </View>
        <ScrollView  contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Featured Services */}
      <Text style={styles.featuredTitle}>Featured Services</Text>

      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Doctor Appointment</Text>
          <Text style={styles.cardSubtitle}>Online Consultancy of{'\n'}popular doctor</Text>
        </View>
        <Image source={require('./assets/doctors.png')} style={styles.cardImage} />
      </View>
      {/* Feature Boxes */}
<View style={styles.featureGrid}>
<TouchableOpacity
    style={[styles.featureBox, { backgroundColor: '#FFCDFE' }]}
    onPress={() => navigation.navigate('Diagnostics')}
    >
    <Image source={require('./assets/diagnostics.png')} style={styles.featureImage} />
    <Text style={styles.featureText}>Diagnostics</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.featureBox, { backgroundColor: '#FFF5BD' }]}
    onPress={() => navigation.navigate('Medicals')}
  >
    <Image source={require('./assets/pharmacy.png')} style={styles.featureImage} />
    <Text style={styles.featureText}>Pharmacy</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.featureBox, { backgroundColor: '#D4FFC9' }]}
    onPress={() => navigation.navigate('Ambulance')} 
  >
    <Image source={require('./assets/ambulance.png')} style={styles.featureImage} />
    <Text style={styles.featureText}>Ambulance</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.featureBox, { backgroundColor: '#D2F8FF' }]}
    onPress={() => navigation.navigate('Nursing')}
    >
    <Image source={require('./assets/nursing.png')} style={styles.featureImage} />
    <Text style={styles.featureText}>Nursing{'\n'}Care</Text>
  </TouchableOpacity>
</View>

{/* Popular Doctor Section */}
<View style={styles.sectionHeader}>
  <Text style={styles.featuredTitle}>Popular Doctor</Text>
  <TouchableOpacity  onPress={() => navigation.goBack()}
  >
  <Text style={styles.viewAll}>View all</Text>
  </TouchableOpacity>
</View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {filteredDoctors.map((doc, index) => (
    <View style={styles.doctorCardRow} key={index}>
      <Image source={doc.image} style={styles.doctorImageRow} />
      <View style={styles.doctorContent}>
        <Text style={styles.doctorName}>{doc.name}</Text>
        <Text style={styles.doctorDesc}>{doc.description}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>{doc.rating}</Text>
          <Text style={styles.ratingText}>{doc.experience}</Text>
        </View>
        <TouchableOpacity style={styles.bookNowButtonRow}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</ScrollView>


{/* Diagnostics  Section */}

<View style={styles.sectionHeader}>
  <Text style={styles.featuredTitle}>Diagnostics</Text>
  <TouchableOpacity     onPress={() => navigation.navigate('Covid')}
  >
  <Text style={styles.viewAll}>View all</Text>
  </TouchableOpacity></View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {filteredDiagnostics.map((test, index) => (
    <View style={styles.Diagnostics} key={index}>
      <Image source={test.image} style={styles.DiagnosticsImageRow} />
      <View style={styles.DiagnosticsContent}>
        <Text style={styles.DiagnosticsName}>{test.name}</Text>
        <Text style={styles.DiagnosticsDesc}>{test.desc}</Text>
        <Text style={styles.DiagnosticsText}>{test.price}</Text>
        <TouchableOpacity style={styles.bookNowDiagnostics}>
          <Text style={styles.bookNowDiagnosticsText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</ScrollView>


<View style={styles.sectionHeader}>
  <Text style={styles.featuredTitle}>Medicals</Text>
  <TouchableOpacity     onPress={() => navigation.navigate('Medicals')}
  >
  <Text style={styles.viewAll}>View all</Text>
  </TouchableOpacity>
</View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {filteredMedicals.map((med, index) => (
    <View style={styles.Medicals} key={index}>
      <Image source={med.image} style={styles.MedicalsImage} />
      <View style={styles.DiagnosticsContent}>
        <Text style={styles.MedicalsName}>{med.name}</Text>
        <Text style={styles.MedicalsDesc}>{med.location}</Text>
        <Text style={styles.MedicalsText}>{med.time}</Text>
        <TouchableOpacity style={styles.MedicalsDirection}>
          <Text style={styles.MedicalsButton}>Direction</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</ScrollView>

   </ScrollView>
   <Footer navigation={navigation} />
</View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    marginLeft: 10,
    flex: 1,
  },
  locationLabel: {
    color: 'gray',
    fontSize: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  notificationIcon: {
    backgroundColor: '#00bcd4',
    padding: 10,
    borderRadius: 20,
  },
  searchBar: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    borderRadius: 5,
    height: 44,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#000',
  },
  featuredTitle: {
    marginTop: 24,
    fontWeight: 600,
    fontSize: 18,
  },
  card: {
    marginTop: 12,
    backgroundColor: '#26a69a',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight:600,
    lineHeight:30,
  },
  cardSubtitle: {
    color: '#e0f2f1',
    marginTop: 4,
    fontSize:14,
    fontWeight:500,
    lineHeight:18,
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconSmall: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  iconTiny: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  iconMedium: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  featureBox: {
    width: '47%',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  featureImage: {
    width: 90,
    height:90,
    resizeMode: 'contain',
    marginBottom: 10,
    left:30,
  },
  featureText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    left:'-20',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
    marginBottom: 12,
  },
  viewAll: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins',
  },
  doctorCardRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    width: 250,
    alignSelf: 'center',
  },
  doctorImageRow: {
    width: 45,
    height: 45,
    borderRadius: 40,
    marginRight: 12,
    marginTop:-50,
  },
  doctorName:{
    fontSize:13,
    fontWeight:600,
  },
  doctorContent: {
    flex: 1,
  },
  doctorDesc:{
    fontSize:10,
    fontWeight:500,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#555',
    fontWeight:500,
    fontFamily: 'Poppins',
    // marginLeft:-40,
  },
  bookNowButtonRow: {
    backgroundColor: '#26a69a',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: '50',
    marginTop: 8,
    width:'100%',
  },
  bookNowText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  Diagnostics: {
    flexDirection: 'column', // Changed from 'row' to 'column'
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    width: 170,
    height: 200, 
  },
  DiagnosticsImageRow: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  DiagnosticsName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  DiagnosticsDesc: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
  },  
  DiagnosticsText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    marginTop: 4,
  },
  bookNowDiagnostics: {
    backgroundColor: '#26a69a',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
  }, 
  bookNowDiagnosticsText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  Medicals: {
    flexDirection: 'column', // Changed from 'row' to 'column'
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    width: 160,
    height: 250, 
  },
  MedicalsImage: {
    width: 130,
    height: 100,
    marginBottom: 10,
  },
  MedicalsName: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  MedicalsDesc: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
  },  
  MedicalsText: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
  MedicalsDirection: {
    backgroundColor: '#26a69a',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
  }, 
  MedicalsButton: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'center',
  }, 
});
