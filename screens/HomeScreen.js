import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../components/ThemeContext";

import profileImage from "../assets/images/profile.png";
import cardImage from "../assets/images/card.png";
import appleImage from "../assets/images/apple.png";
import spotifyImage from "../assets/images/spotify.png";
import moneyTransferImage from "../assets/images/moneyTransfer.png";
import groceryImage from "../assets/images/grocery.png";

const transactions = [
  {
    id: "1",
    company: "Apple Store",
    purpose: "Entertainment",
    amount: "-$5.99",
    image: appleImage,
  },
  {
    id: "2",
    company: "Spotify",
    purpose: "Music",
    amount: "-$12.99",
    image: spotifyImage,
  },
  {
    id: "3",
    company: "Money Transfer",
    purpose: "Transaction",
    amount: "$300",
    image: moneyTransferImage,
  },
  {
    id: "4",
    company: "Grocery",
    purpose: "Shopping",
    amount: "-$88",
    image: groceryImage,
  },
  { id: "5", company: "Amazon", purpose: "Shopping", amount: "$100.00" },
];

const TransactionItem = ({ item }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <View style={styles.transactionItem}>
      <View style={styles.companyImageContainer}>
        {item.image && (
          <Image source={item.image} style={styles.companyImage} />
        )}
      </View>
      <View style={styles.transactionDetails}>
        <Text
          style={[styles.companyName, { color: isDarkTheme ? "#fff" : "#000" }]}
        >
          {item.company}
        </Text>
        <Text
          style={[styles.purpose, { color: isDarkTheme ? "#ccc" : "#666" }]}
        >
          {item.purpose}
        </Text>
      </View>
      <Text style={[styles.amount, { color: isDarkTheme ? "#fff" : "#000" }]}>
        {item.amount}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#101930" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Image source={profileImage} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text
            style={[
              styles.welcomeText,
              { color: isDarkTheme ? "#ccc" : "#666" },
            ]}
          >
            Welcome back,
          </Text>
          <Text
            style={[styles.userName, { color: isDarkTheme ? "#fff" : "#333" }]}
          >
            Frederick Ofori
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.searchIcon,
            {
              backgroundColor: isDarkTheme
                ? "rgba(45, 40, 73, 0.301);"
                : "#f0f0f0",
            },
          ]}
        >
          <Ionicons
            name="search-outline"
            size={24}
            color={isDarkTheme ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.cardImage} />
      </View>

      <View style={styles.belowCard}>
        <View
          style={[
            styles.icons,
            {
              backgroundColor: isDarkTheme
                ? "rgba(45, 40, 73, 0.301);"
                : "#f0f0f0",
            },
          ]}
        >
          <Ionicons
            name="send-outline"
            size={25}
            color={isDarkTheme ? "white" : "black"}
          />
        </View>
        <View
          style={[
            styles.icons,
            {
              backgroundColor: isDarkTheme
                ? "rgba(45, 40, 73, 0.301);"
                : "#f0f0f0",
            },
          ]}
        >
          <Ionicons
            name="download-outline"
            size={25}
            color={isDarkTheme ? "white" : "black"}
          />
        </View>
        <View
          style={[
            styles.icons,
            {
              backgroundColor: isDarkTheme
                ? "rgba(45, 40, 73, 0.301);"
                : "#f0f0f0",
            },
          ]}
        >
          <Ionicons
            name="cash-outline"
            size={25}
            color={isDarkTheme ? "white" : "black"}
          />
        </View>
        <View
          style={[
            styles.icons,
            {
              backgroundColor: isDarkTheme
                ? "rgba(45, 40, 73, 0.301);"
                : "#f0f0f0",
            },
          ]}
        >
          <Ionicons
            name="wallet-outline"
            size={25}
            color={isDarkTheme ? "white" : "black"}
          />
        </View>
      </View>
      <View style={styles.iconNamesBox}>
        <Text
          style={[styles.iconName, { color: isDarkTheme ? "#ccc" : "#000" }]}
        >
          Sent
        </Text>
        <Text
          style={[styles.iconName, { color: isDarkTheme ? "#ccc" : "#000" }]}
        >
          Receive
        </Text>
        <Text
          style={[styles.iconName, { color: isDarkTheme ? "#ccc" : "#000" }]}
        >
          Loan
        </Text>
        <Text
          style={[styles.iconName, { color: isDarkTheme ? "#ccc" : "#000" }]}
        >
          Topup
        </Text>
      </View>

      <View style={styles.listTitle}>
        <Text
          style={[styles.transaction, { color: isDarkTheme ? "#fff" : "#000" }]}
        >
          Transaction
        </Text>
        <Text
          style={[
            styles.seeAll,
            { color: isDarkTheme ? "rgb(11, 97, 196)" : "rgb(11, 97, 196)" },
          ]}
        >
          See All
        </Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionList}
      />
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    fontWeight: "500",
  },

  searchIcon: {
    marginLeft: "auto",
    height: 46,
    width: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
  },
  
  text: {
    fontSize: 20,
  },

  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  belowCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardImage: {
    width: "100%",
  },

  icons: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },

  iconNamesBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 2,
    marginBottom: 20,
  },

  iconName: {
    fontSize: 18,
  },

  listTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  
  transaction: {
    fontSize: 18,
    fontWeight: "500",
  },

  seeAll: {
    fontSize: 16,
    fontWeight: "500",
  },

  transactionList: {
    marginTop: 0,
  },

  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
  },

  companyImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  transactionDetails: {
    flex: 1,
  },

  companyName: {
    fontSize: 18,
    fontWeight: "500",
  },

  purpose: {
    fontSize: 13,
  },

  amount: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HomeScreen;