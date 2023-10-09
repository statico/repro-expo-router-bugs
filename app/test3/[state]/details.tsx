import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Test 3 Details</Text>
      <Text>Got params: {JSON.stringify(params)}</Text>
      <Link href="/" asChild>
        <Button title="Go home" />
      </Link>
    </View>
  );
}
