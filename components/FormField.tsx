import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { images, icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      <Text className="text-base text-gray-600 font-pmedium">{title}</Text>
      <View className=" w-full flex-row h-12 px-2 rounded-lg border border-gray-500 focus:border-primary items-center">
        <TextInput
          className="flex-1 rounded-2xl flex w-full text-gray-600 text-base font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#000000"}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity
            className="text-end justify-end items-end"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              className="w-6 h-6"
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
