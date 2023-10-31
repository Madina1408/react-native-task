import React from "react";
import { Text, StyleSheet, View } from "react-native";
import BackgroundImage from "./BackgroundImage";
import TrialButton from "./TrialButton";

const Try = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Try</Text>
      <BackgroundImage
        title={"Mandatory Instructions"}
        imgSrc={require("../../assets/shutterstock.png")}
      >
        <TrialButton title={"Trial Workout"}></TrialButton>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    gap:15,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title:{
    fontSize:26
  }
});

export default Try;
