import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const StatusBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statTitle}>My stats</Text>
      <View style={styles.statDataWrapper}>
        <View style={styles.statData}>
          <AntDesign name="clockcircleo" size={20} color="green" />
          <Text style={styles.statText}>0 h 0 m</Text>
        </View>
        <View style={styles.statData}>
          <Ionicons name="barbell-outline" size={20} color="#9932cc" style={styles.liftIcon} />
          <Text style={styles.statText}>0 Exercises</Text>
        </View>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap:15,
  },
  statTitle:{
    fontSize: 28,
    fontWeight: "bold",
  },
  statDataWrapper:{
    flexDirection: "row",
    justifyContent: "flex-start",
    gap:20,

  },
  statData:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap:8,
  },
  statText:{
    fontSize: 20,
    fontWeight:'bold'
  },
  liftIcon:{
    transform: [{rotate: '-40deg'}],
    fontWeight:'bold'
  },
  separator:{
    height:20,
    backgroundColor: "#F9F9F9"
  }
});

export default StatusBar;
