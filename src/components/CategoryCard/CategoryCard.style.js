import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  category: {
    flex: 3,
    marginTop: 40,
    margin: 10,
    color: 'black',
    fontSize: 20,
  },
  image: {
    flex: 1,
    margin: 10,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});
