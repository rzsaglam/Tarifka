import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import styles from './FoodDetail.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';

const FoodDetail = ({route}) => {
  const {mealId} = route.params;
  console.log(mealId);
  const {data, loading} = useFetch(`${Config.MEAL_FILTER}${mealId}`);
  if (loading) {
    <ActivityIndicator size="large" />;
  }

  const renderMeal = ({item}) => (
    <MealCard
      style={styles.container}
      mealName={item.strMeal}
      mealImage={item.strMealThumb}
      mealArea={item.strArea}
      mealInstructions={item.strInstructions}
      mealYoutube={item.strYoutube}
    />
  );
  return <FlatList data={data.meals} renderItem={renderMeal} />;
};

export default FoodDetail;
