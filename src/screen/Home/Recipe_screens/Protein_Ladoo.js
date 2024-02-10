
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ResizeMode } from "expo-av";
import { Video } from 'expo-av'
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "expo-video-player";
const Protein_ladoo = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignContent: 'center', justifyContent: 'center',backgroundColor:'lightyellow' }}>
          
            {/* <View style={{ height: 300, width: '95%',alignSelf:'center',marginLeft:'30%',marginVertical:20}}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode:"cover",
        //   source: require("../../Assets/Protein_Ladoo/dates_ladoo.mp4"),
          source: require("../../../../src/dates_ladoo.mp4"),
        }}
        style={{ height: 300,width:300 }}
      />
</View> */}



<View style={{ height: 300, width: 400 ,alignSelf:'center',marginVertical:30}}>
        <Video
          useNativeControls={true}
          // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          source={ require("../../../../src/dates_ladoo.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          style={{ width: '98%', height: 300,borderRadius:30 }}
        />
      </View> 
        </View>
    );
};

export default Protein_ladoo;

const styles = StyleSheet.create({});
