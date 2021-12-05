import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  title: {
    color: '#b71c1c',
    fontWeight: 'bold',
    fontSize: 30,
  },
  area: {
    color: '#b71c1c',
    fontWeight: 'bold',
    fontSize: 15,
    borderBottomColor: '#a4a4a4',
    borderBottomWidth: 1,
  },
  instructions: {
    color: 'black',
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: '90%',
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
