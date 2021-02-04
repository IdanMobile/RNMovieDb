import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { movieGif } from '../../assets/gifs';
import { SplashScreenStyles } from '../../styles/SplashScreenStyles';


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.moveAnimation = new Animated.ValueXY({ x: 0, y: 600 });
    }

    componentDidMount() {
        this._downToMiddle();
        setTimeout(() => this._nextScreen(), 2500);
    }

    render() {
        const { container, gif } = SplashScreenStyles;
        return ( 
        <View style = { container } >
            <Animated.Image style = {
                [gif, this.moveAnimation.getLayout()]
            }
            source = { movieGif }/> 
        </View >
        );
    }

    _nextScreen = () => {
        console.log('nextScreen');
        const { navigate } = this.props.navigation;
        this._middleToTop();
        setTimeout(() => navigate('MovieList'), 500);
    };

    _downToMiddle = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: 0, y: 0 },
            speed: 1,
        }).start();
    };

    _middleToTop = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: 0, y: -600 },
            speed: 1,
            bounciness: 0,
        }).start();
    };
}

export { SplashScreen };