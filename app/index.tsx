import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { Link, router, Redirect } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  // const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    // => API call
    router.push("/support");
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-[85vh] w-full justify-center px-4 my-6">
          <View className="w-full justify-center items-center">
            <Image
              source={images.jlogo}
              className="w-[200px] h-[100px]"
              resizeMode="contain"
            />
            <Text className="mt-10 text-gray-700 text-xl font-semibold font-psemibold">
              Login to Intranet
            </Text>
          </View>
          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e: any) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles={"mt-7"}
          />
          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e: any) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles={"mt-7"}
          />

          <CustomButton
            containerStyles="mt-7"
            title="Sign In"
            handlePress={() => onSubmit()}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
