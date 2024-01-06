import React, { useState } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import SafeViewAndroid from "../styles/SafeViewAndroid";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </SafeAreaView>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

export default Cafe;