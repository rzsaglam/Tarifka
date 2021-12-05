import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({categoryName, categoryImage, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: categoryImage}} />
        <Text style={styles.category}>{categoryName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
