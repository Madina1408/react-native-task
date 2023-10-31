import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const TrialButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5398f6",
    padding: 10,
    borderRadius: 5,
  },
  buttonTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
});

export default TrialButton;
