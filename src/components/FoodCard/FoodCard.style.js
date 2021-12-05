import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    flex: 1,
    position: 'relative',
    height: Dimensions.get('window').height / 4,
  },
  innerContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    opacity: 0.7,
    width: '100%',
    height: '15%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    position: 'absolute',
    marginRight: 10,
    bottom: 0,
    right: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
