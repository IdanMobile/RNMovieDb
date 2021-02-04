import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import {
    getTrendingMovie,
    searchMovieList,
} from '../../../data/actions/MovieList/movieListActions';
import Contants from '../../../data/Contants';
import styles from '../../styles/TrendingMovie/TrendingMovieListStyle';
import { createImageProgress } from '../../components/ProgressImage';
const FSImage = createImageProgress(FastImage);

class TrendingMovieListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
        };

        this.props.getTrendingMovie(this.props.page);
    }

    showItemDetails(item) {
        this.props.navigation.navigate('MovieDetails', {
            title: item.name || item.title,
            id: item.id,
        });
    }

    loadMoreFeeds = () => {
        if (this.props.isSearch) {
            console.log('searchMovieList', this.props.searchText);
            this.props.searchMovieList(this.props.searchText, this.props.page + 1);
        } else {
            this.props.getTrendingMovie(this.props.page + 1);
        }
    };

    render() {
        console.log('props', this.props);
        return ( <
            FlatList data = { this.props.movieList }
            keyExtractor = {
                (item, index) => `${item.id + index}` }
            contentContainerStyle = { styles.container }
            numColumns = { 2 }
            renderItem = {
                ({ item, index }) => ( <TouchableOpacity style = { styles.itemContainer }
                    onPress = {
                        () => this.showItemDetails(item) } >
                    <View style = { styles.listItem } >
                    <FSImage imageStyle = { styles.image }
                    source = {
                        {
                            uri: `${Contants.ImageUrl + item.poster_path}`,
                        }
                    }
                    // resizeMode={FastImage.resizeMode.cover}
                    /> 
                    <Text style={styles.title} numberOfLines={1}> 
                        { item.name || item.title } 
                    </Text> 
                </View>
                 </TouchableOpacity>
                )
            }
            onEndReachedThreshold = { 2 }
            onEndReached = { this.loadMoreFeeds }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    movieList: state.movieList.movie,
    page: state.movieList.page,
    isSearch: state.movieList.isSearch,
    searchText: state.movieList.searchText,
});

export default connect(mapStateToProps, { getTrendingMovie, searchMovieList })(
    TrendingMovieListScreen,
);