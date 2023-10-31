import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StatusBar from "../components/StatusBar";
import Trimesters from "../components/Trimesters";
import Try from "../components/Try";
import Continue from "../components/Continue";
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Trimesters />
      <Try />
      <Continue />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
