import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from '../../components/react-native-responsive-screen';

const TrendingMovieListStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: wp(46),
    marginHorizontal: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItem: {
    margin: 8,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {fontSize: 18, marginVertical: 4},
  image: {
    width: wp(46),
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default TrendingMovieListStyle;
