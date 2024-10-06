import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <Text className="text-purple-50">Sign In</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
