import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Got params: {JSON.stringify(params)}</Text>
      <Link href="./other" asChild>
        <Button title="Go to other page (relative)" />
      </Link>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
    </View>
  );
}
