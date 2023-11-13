import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, {createRef, useRef} from "react";
import {TextInput} from "react-native-gesture-handler";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();
  const userName = useRef<String>

  const onLogOut = async () => {
    await AsyncStorage.removeItem("user");
    signOut();
  };

  const GetData = async () => {
    const user_uuid:Response = await fetch("https://api.mojang.com/users/profiles/minecraft/"+ userName)

    const data:Response = await fetch("https://api.hypixel.net/skyblock/profiles?uuid="+user_uuid)// fetch hypixel api


  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TextInput ref={userName}></TextInput>
      <Pressable onPress={GetData} style={styles.button}>
        <Text style={{ color: "white" }}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#05BFDB",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
