import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="h-full ">
      <View className="justify-center items-center h-full">
        <Text className="text-2xl">Profile</Text>
      </View>
    </SafeAreaView>
  );
}
