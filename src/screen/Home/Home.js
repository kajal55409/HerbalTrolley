import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../utils/images";
import Swiper from "react-native-swiper";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
   <ScrollView style={{ flex: 1 }}>
      <View style={{ alignSelf: 'center', height: 250, justifyContent:'center',alignItems:'center',padding:10 }}>
          <Swiper
            autoplay
            dot={
              <View
                style={{
                  backgroundColor: 'gray',
                  width: 5,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: colors.orange,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            paginationStyle={{
              // bottom: -23,

              alignSelf: 'center'
            }}
            loop
          >
            <Image source={Images.ProteinLadoo} resizeMode="contain" style={styles.image} />
            <Image source={Images.abc_juice} resizeMode="contain" style={styles.image} />
            <Image source={Images.Dates_ladoo} resizeMode="contain" style={styles.image} />
            <Image source={Images.Healthy_mathri} resizeMode="contain" style={styles.image} />
            <Image source={Images.Snacks} resizeMode="contain" style={styles.image} />
          </Swiper>
 </View>

 <View style={{ padding: 25 }}>
          <Text style={{ color: colors.blue, fontWeight: '600', fontSize: 20, }}>Recipe</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

          <TouchableOpacity style={styles.cardview}  onPress={() => navigation.navigate("Protein_ladoo")}>
            <Image source={Images.ProteinLadoo} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Protein Ladoo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardview}>
            <Image source={Images.Snacks} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Snacks</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 30 }}>

          <TouchableOpacity style={styles.cardview}>
            <Image source={Images.abc_juice} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>ABC  Morning Juice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardview}>
            <Image source={Images.Healthy_mathri} resizeMode={'contain'} style={styles.icon_image} />
            <Text style={styles.icon_img_text}>Healthy Mathri</Text>
          </TouchableOpacity>
        </View>
 </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  image: {
    height: 250,
    width: '97%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    // flex:1
  },
  icon_image: {
    height: 140, width: 150,
    alignSelf: 'center',
    padding:20

  },
  icon_img_text: {
    textAlign: 'center', color: colors.blue, fontWeight: '400', fontSize: 15
  },

  cardview: {
    height: 170,
    width: '47%',
    backgroundColor: 'white',
    elevation: 2,
    // marginTop:10,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue

  }
});
