import { SafeAreaView } from "react-native-safe-area-context";
import LatihanDua from "./latihan-dua";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LatihanSatu /> */}
      <LatihanDua />
    </SafeAreaView>
  );
}
