import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const TrimesterButton = ({ title, isActive, onTrimesterButtonPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive ? styles.buttonActive : ""]}
      onPress={onTrimesterButtonPress}
    >
      <Text
        style={[styles.buttonTitle, isActive ? styles.buttonTitleActive : ""]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:120,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#F07427",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 6,
  },
  buttonActive: {
    backgroundColor: "#e44e5c",
  },
  buttonTitle: {
    color: "#000",
    fontSize: 15,
    fontWeight: 'medium',
  },
  buttonTitleActive: {
    color: "#fff",
  },
});

export default TrimesterButton;