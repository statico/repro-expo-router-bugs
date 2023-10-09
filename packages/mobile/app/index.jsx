import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>This is the index page with no group or layout.</Text>
      <Link href="/test/aaaaa/details" asChild>
        <Button title="Test 1" />
      </Link>
      <Link href="_sitemap" asChild>
        <Button title="View Sitemap" />
      </Link>
    </View>
  );
}
