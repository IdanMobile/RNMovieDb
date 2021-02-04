import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {
  getMovieDetails,
  clearMovieDetails,
  getMovieVideos,
} from '../../../data/actions/MovieDetail/movieDetailActions';
import Contants from '../../../data/Contants';
import styles from '../../styles/MovieDetail/MovieDetailStyle';
import GlobalImages from '../../assets/Images';
import YouTube from 'react-native-youtube';
import {createImageProgress} from '../../components/ProgressImage';
const FSImage = createImageProgress(FastImage);
class MovieDetailScreen extends Component {
  constructor(props) {
    super(props);
    const {id} = this.props.route.params;
    this.props.getMovieDetails(id);
    this.props.getMovieVideos(id);
    this.state = {
      activeVideo: '',
    };
  }

  componentWillUnmount() {
    this.props.clearMovieDetails();
  }

  render() {
    console.log('DETAILS', this.props);
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 9999999,
            marginTop: 32,
            padding: 16,
          }}>
          <Image
            style={{width: 24, height: 24}}
            source={GlobalImages.leftArrow}
          />
        </TouchableOpacity>
        <FastImage
          style={styles.image}
          source={{
            uri: Contants.ImageUrl + this.props.movieDetail.poster_path,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.releaseDate}>
            {this.props.movieDetail.release_date}
          </Text>
          <Text style={styles.title}>{this.props.movieDetail.title}</Text>
          <Text style={styles.overview}>{this.props.movieDetail.overview}</Text>
        </View>

        <Text style={styles.lable}>Movie Videos</Text>

        <View style={styles.flatListContainer}>
          <FlatList
            data={this.props.movieVideo}
            keyExtractor={(item, index) => `${item.id + index}`}
            horizontal={true}
            initialNumToRender={4}
            renderItem={({item}) => (
              <YouTube
                videoId={item.key}
                play={this.state.activeVideo == item.key}
                fullscreen
                onChangeState={(e) => {
                  if (e.state === 'playing') {
                    this.setState({activeVideo: item.key});
                  } else {
                    this.state.activeVideo == ''
                      ? null
                      : this.setState({activeVideo: ''});
                  }
                }}
                style={styles.youtube}
              />
            )}
          />
        </View>

        <Text style={styles.lable}>Production Companies</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.props.movieDetail.production_companies}
            keyExtractor={(item, index) => `${item.id + index}`}
            horizontal={true}
            initialNumToRender={6}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.productionCompaniesContainer}
                  onPress={() => {}}>
                  <View style={styles.productionCompanieslistItem}>
                    <FSImage
                      style={styles.productionCompaniesImage}
                      source={{
                        uri: Contants.ImageUrl + item.logo_path,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                    <Text
                      numberOfLines={2}
                      style={styles.productionCompaniesTitle}>
                      {item.name || item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <SafeAreaView />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetails.movieDetail,
  movieVideo: state.movieDetails.movieVideo,
});

export default connect(mapStateToProps, {
  getMovieDetails,
  getMovieVideos,
  clearMovieDetails,
})(MovieDetailScreen);
