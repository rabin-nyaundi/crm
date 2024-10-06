import Checkin from "@/components/Checkin";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="h-full ">
      <View className="justify-center items-center h-full">
        <Text className="text-2xl">Home</Text>
        <Checkin />
      </View>
    </SafeAreaView>
  );
}
