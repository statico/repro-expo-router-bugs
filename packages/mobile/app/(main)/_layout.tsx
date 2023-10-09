import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        borderColor: "darkred",
        borderWidth: 2,
      }}
    >
      <Text style={{ backgroundColor: "darkred", color: "white" }}>
        (foo)/_layout.tsx
      </Text>
      <Slot />
    </View>
  );
}
