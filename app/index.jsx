import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Tests:</Text>
      <Link href="/test1/blorp/details" asChild>
        <Button title="Test 1" />
      </Link>
      <Link href="/test2/blorp/details" asChild>
        <Button title="Test 2" />
      </Link>
      <Link href="/test3/blorp/details" asChild>
        <Button title="Test 3" />
      </Link>
      <Link href="/test1/new" asChild>
        <Button title="Test 1 No Group" />
      </Link>
      <Link href="/_sitemap" asChild>
        <Button title="Sitemap" />
      </Link>
    </View>
  );
}
