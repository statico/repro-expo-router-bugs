import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        borderColor: "darkgreen",
        borderWidth: 2,
      }}
    >
      <Text style={{ backgroundColor: "darkgreen", color: "white" }}>
        packages/mobile/app/(main)/test/[param1]/[param2]/[param3]/[param4]/_layout.tsx
      </Text>
      <Slot />
    </View>
  );
}
