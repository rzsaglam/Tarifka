import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({
  mealName,
  mealImage,
  mealArea,
  mealInstructions,
  mealYoutube,
}) => {
  const url = mealYoutube;
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
    console.log(url);
  }, [url]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: mealImage}} />
      <Text style={styles.title}>{mealName}</Text>
      <Text style={styles.area}>{mealArea}</Text>
      <Text style={styles.instructions}>{mealInstructions}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>YouTube</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;
