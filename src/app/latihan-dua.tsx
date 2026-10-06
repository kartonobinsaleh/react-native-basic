import { ScrollView, StyleSheet, Text, View } from "react-native";

const LatihanDua = () => {
  return (
    <ScrollView>
      <Text>latihan dua</Text>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
    </ScrollView>
  );
};

export default LatihanDua;

// Styling di react native
const styles = StyleSheet.create({
  box1: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
  box2: {
    backgroundColor: "green",
    height: 200,
    width: 200,
  },
  box3: {
    backgroundColor: "red",
    height: 250,
    width: 250,
  },
});
