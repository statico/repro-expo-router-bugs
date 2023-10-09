import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This is app/test/new.tsx</Text>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
    </View>
  );
}
