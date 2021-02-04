import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderBackButton, createStackNavigator} from '@react-navigation/stack';
import TrendingMovieListScreen from '../screens/TrendingMovie/TrendingMovieListScreen';
import MovieDetailScreen from '../screens/MovieDetail/MovieDetailScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchComponent from '../components/SearchBar/SearchComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import store from '../../data/store';
import {
  searchMovieList,
  getTrendingMovie,
} from '../../data/actions/MovieList/movieListActions';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchText, setsearchText] = useState('');

  const searchIcon = (
    <TouchableOpacity
      style={{marginHorizontal: 16}}
      onPress={() => {
        setSearchToggle(!searchToggle);
      }}>
      <Icon name="search" size={30} color="#333" />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator keyboardHandlingEnabled={false} mode="modal">
      {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        /> */}
        <Stack.Screen
          name="MovieList"
          component={TrendingMovieListScreen}
          options={(props) => {
            return {
              title: searchToggle ? (
                <SearchComponent
                  value={searchText}
                  onChangeText={(text) => {
                    setsearchText(text);
                  }}
                  onSubmitEditing={() => {
                    if (searchText.length > 0) {
                      store.dispatch(searchMovieList(searchText, 1));
                    } else {
                      store.dispatch(getTrendingMovie(1));
                    }

                    setSearchToggle(!searchToggle);
                  }}
                />
              ) : (
                props.title
              ),

              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: '700',
                fontSize: 22,
              },
              headerRight: (props) => (searchToggle ? null : searchIcon),
            };
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailScreen}
          options={({route, navigation}) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#000',
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 22,
            },

            headerShown: false,
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
