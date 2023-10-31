import React from "react";
import { Text, StyleSheet, View } from "react-native";
import BackgroundImage from "./BackgroundImage";

const Continue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue</Text>
      <BackgroundImage
        title={"General exercises"}
        imgSrc={require("../../assets/pregnancy_workout2.webp")}
      >
      </BackgroundImage>
      <BackgroundImage
        title={"Muscle strengthening"}
        imgSrc={require("../../assets/pregnancy-workout.webp")}
      >
      </BackgroundImage>
      <BackgroundImage
        title={"Preparation for childbirth"}
        imgSrc={require("../../assets/shutterstock.png")}
      >
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
  },
});

export default Continue;
