import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const submit = () => {};

  const [isSubmitting, setisSubmitting] = useState(false);

  const [input, setinput] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign Up To Aora
          </Text>
          <InputField
            title="Username"
            value={input.email}
            handleChangeText={(e) => setinput({ ...input, email: e })}
            otherStyles="mt-7"
          />
          <InputField
            title="Email"
            value={input.email}
            handleChangeText={(e) => setinput({ ...input, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <InputField
            title="Password"
            value={input.password}
            handleChangeText={(e) => setinput({ ...input, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Lets Get Started!"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">
              Already a Aora member?
            </Text>
            <Link
              href="/signIn"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
