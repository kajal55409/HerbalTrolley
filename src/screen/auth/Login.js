import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{alignContent:'center',justifyContent:'center'}}>
      <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:290,borderWidth:1,padding:10}}onPress={() => navigation.navigate("Home")}> login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
