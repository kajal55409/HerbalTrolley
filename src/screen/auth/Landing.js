import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.Button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttontext}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.Button}
        onPress={() => navigation.navigate("Sign_up")}
      >
        <Text style={styles.buttontext}>Register</Text>
      </Pressable>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Button: {
    height: 40,
    width: 190,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
});
