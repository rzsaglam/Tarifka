import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({mealName, mealImage, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: mealImage}} />
        <View style={styles.innerContainer} />
        <Text style={styles.title} numberOfLines={1}>
          {mealName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
