import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import InputField from '../../components/InputField'
//min-h-[85vh]

const SignIn = () => {
  const [input, setinput] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

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
            keyboardType="password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn