import { SafeAreaView, StyleSheet } from 'react-native';
import React from "react";
import SafeViewAndroid from "./src/styles/SafeViewAndroid";
import SectionListBasics from "./src/components/SectionListBasics";

const DATA = [
  {
    title: "Travel the world",
    description: "Loren ipsum is simply dummy text of the printing and typesetting industry.",
    lottie: require("./src/assets/lottie-1.json")
  },
  {
    title: "Let's travel",
    description: "Loren ipsum is simply dummy text of the printing and typesetting industry.",
    lottie: require("./src/assets/lottie-2.json")
  },
  {
    title: "Play a trip",
    description: "Loren ipsum is simply dummy text of the printing and typesetting industry.",
    lottie: require("./src/assets/lottie-3.json")
  }
]

/*export default function App() {
  const scrollX = new Animated.Value(0);
  const animation = useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: wp(100), height: hp(100), backgroundColor: "#DDDDDD", paddingTop: wp(10) }}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: hp(30),
            height: hp(30),
            alignSelf: "center",
          }}
          source={item.lottie}
        />
        <Text style={{
          textAlign: "center",
          marginTop: hp(5),
          fontSize: hp(5),
          fontWeight: "bold"
        }}>{item.title}</Text>
        <Text style={{
          width: wp(70),
          textAlign: "center",
          alignSelf: "center",
          marginTop: hp(5),
          fontSize: hp(2),
          color: "#AAAAAA"
        }}>{item.description}</Text>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }], { useNativeDriver: true }
        )}
      />
      <View style={{ position: "absolute", bottom: hp(10), flexDirection: "row" }}>
        {DATA.map((item, index) => {
          const opacity = scrollX.interpolate(
            {
              inputRange: [(index - 1) * wp(100), index * wp(100), (index + 1) * wp(100)],
              outputRange: [0.4, 1, 0.4],
              extrapolate: "clamp"
            }
          );
          const scale = scrollX.interpolate(
            {
              inputRange: [(index - 1) * wp(100), index * wp(100), (index + 1) * wp(100)],
              outputRange: [0.8, 1.4, 0.8],
              extrapolate: "clamp"
            }
          );
          return <Animated.View
            key={index}
            style={{
              width: hp(1),
              height: hp(1),
              marginHorizontal: wp(2),
              backgroundColor: "#FFFFFF",
              borderRadius: 100,
              opacity: opacity,
              transform: [
                { scale: scale }
              ]
            }}></Animated.View>
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}*/

const App = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SectionListBasics></SectionListBasics>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
