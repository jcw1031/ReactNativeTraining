import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import SafeViewAndroid from "../styles/SafeViewAndroid";

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text} />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {
            text.split(' ')
              .map(word => word && '🍕')
              .join(' ')
          }
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PizzaTranslator;