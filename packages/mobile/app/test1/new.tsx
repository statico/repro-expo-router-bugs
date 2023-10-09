import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Without group</Text>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
    </View>
  );
}
