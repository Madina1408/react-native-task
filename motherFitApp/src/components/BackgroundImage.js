import React, { Children } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";

const BackgroundImage = ({imgSrc, title, children})=>{
  return(
    <ImageBackground style={styles.imageBackground} source={imgSrc}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
});

export default BackgroundImage;