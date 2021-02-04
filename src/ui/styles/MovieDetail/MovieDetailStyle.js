import {StyleSheet, Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
const MovieDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: deviceHeight / 2.5,
  },
  releaseDate: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: '2%',
    paddingBottom: '8%',
    alignSelf: 'flex-end',
    marginRight: 8,
  },
  titleContainer: {
    marginHorizontal: '6%',
    marginTop: '-12%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  productionCompaniesImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#212121',
  },
  flatListContainer: {
    marginTop: 14,
    marginHorizontal: 16,
  },
  productionCompaniesTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
  },
  productionCompaniesContainer: {
    width: 100,
  },
  productionCompanieslistItem: {
    alignItems: 'center',
  },
  lable: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  overview: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
    color: 'darkgray',
  },
  youtube: {
    alignSelf: 'stretch',
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 8,
    borderWidth: 3,
    borderColor: '#212121',
  },
});
export default MovieDetailStyle;
