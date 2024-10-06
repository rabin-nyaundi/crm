import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Checkin() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView className="h-auto ">
      <View className="justify-center items-center h-auto">
        <Text className="text-2xl">Checkin</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#74aa50" }}
          thumbColor={isEnabled ? "#74aa50" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
}
