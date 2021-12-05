import React from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Home.style';
import useFetch from '../../hooks/useFetch/useFetch';
import CategoryCard from '../../components/CategoryCard';

const Home = ({navigation}) => {
  const {data, loading} = useFetch(Config.CATEGORIES_API);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  const renderCategory = ({item}) => (
    <CategoryCard
      categoryName={item.strCategory}
      categoryImage={item.strCategoryThumb}
      onSelect={() => handlePress({categoryName: item.strCategory})}
    />
  );
  const handlePress = categoryName => {
    navigation.navigate('FoodCategoryPage', categoryName);
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Home;
