import { Image, Text, TextInput, View } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const LatihanSatu = () => {
  return (
    <View style={{ backgroundColor: "green" }}>
      <Text style={{ color: "blue", fontSize: 32 }}>Hello World</Text>
      <TextInput
        placeholder="Masukan Nama Anda"
        style={{
          height: 40,
          padding: 4,
          borderWidth: 1,
          marginHorizontal: 8,
          borderRadius: 5,
        }}
      />
      r
      <Image source={logo} />
      <Image source={logo} />
    </View>
  );
};

export default LatihanSatu;
