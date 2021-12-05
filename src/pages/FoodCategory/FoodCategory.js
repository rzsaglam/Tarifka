import React from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import styles from './FoodCategory.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import FoodCard from '../../components/FoodCard';

const FoodCategory = ({route, navigation, onSelect}) => {
  const {categoryName} = route.params;
  const {data, loading} = useFetch(`${Config.CATEGORY_FILTER}${categoryName}`);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  const renderMeals = ({item}) => (
    <FoodCard
      mealName={item.strMeal}
      mealImage={item.strMealThumb}
      onSelect={() => {
        handlePress({mealId: item.idMeal});
      }}
    />
  );
  const handlePress = mealId => {
    navigation.navigate('FoodDetailPage', mealId);
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default FoodCategory;
