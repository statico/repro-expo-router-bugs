import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This is the other page.</Text>
      <Text>Got params: {JSON.stringify(params)}</Text>
      <Link href="./details" asChild>
        <Button title="Go back to details (relative)" />
      </Link>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
    </View>
  );
}
