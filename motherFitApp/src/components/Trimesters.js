import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import TrimesterButton from "./TrimesterButtons";

const Trimesters = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleTrimesterButton = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trimesters</Text>
      <View style={styles.buttonsContainer}>
        <TrimesterButton
          title={"Trimester 1"}
          isActive={activeButton === 1}
          onTrimesterButtonPress={()=>handleTrimesterButton(1)}
        />
        <TrimesterButton
          title={"Trimester 2"}
          isActive={activeButton === 2}
          onTrimesterButtonPress={()=>handleTrimesterButton(2)}
        />
        <TrimesterButton
          title={"Trimester 3"}
          isActive={activeButton === 3}
          onTrimesterButtonPress={()=>handleTrimesterButton(3)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'medium',
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Trimesters;
