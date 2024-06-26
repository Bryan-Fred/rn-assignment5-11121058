import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../components/ThemeContext';

import cardImage from '../assets/images/card.png';

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#101930' : '#fff' }]}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={[styles.welcomeText, { color: isDarkTheme ? '#ccc' : '#666' }]}>Welcome back,</Text>
          <Text style={[styles.userName, { color: isDarkTheme ? '#fff' : '#333' }]}>Frederick Ofori</Text>
        </View>
        <TouchableOpacity style={[styles.searchIcon, { backgroundColor: isDarkTheme ? 'rgba(45, 40, 73, 0.301);' : '#f0f0f0' }]}>
          <Ionicons name="search-outline" size={24} color={isDarkTheme ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.cardImage} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchIcon: {
    marginLeft: 'auto',
    height: 46,
    width: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
  },
  text: {
    fontSize: 20,
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  belowCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
  },
  icons: {
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  iconNamesBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 2,
    marginBottom: 20,
  },
  iconName: {
    fontSize: 18,
  },
  listTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transaction: {
    fontSize: 18,
    fontWeight: '500',
  },
  seeAll: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionList: {
    marginTop: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  companyImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '500',
  },
  purpose: {
    fontSize: 13,
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;