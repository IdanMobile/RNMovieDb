import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Keyboard, Dimensions, TextInput} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const SearchComponent = (props) => {
  // const [keyboardOffset, setKeyboardOffset] = useState(0);
  // const onKeyboardShow = (event) =>
  //   setKeyboardOffset(event.endCoordinates.height);
  // const onKeyboardHide = (event) => {};
  // const keyboardDidShowListener = useRef();
  // const keyboardDidHideListener = useRef();

  // useEffect(() => {
  //   keyboardDidShowListener.current = Keyboard.addListener(
  //     'keyboardWillShow',
  //     onKeyboardShow,
  //   );
  //   keyboardDidHideListener.current = Keyboard.addListener(
  //     'keyboardWillHide',
  //     onKeyboardHide,
  //   );

  //   return () => {
  //     keyboardDidShowListener.current.remove();
  //     keyboardDidHideListener.current.remove();
  //   };
  // }, []);

  const {clampedScroll} = props;
  //   const searchBarTranslate = clampedScroll.interpolate({
  //     inputRange: [0, 50],
  //     outputRange: [0, -250],
  //     extrapolate: 'clamp',
  //   });
  //   const searchBarOpacity = clampedScroll.interpolate({
  //     inputRange: [0, 10],
  //     outputRange: [1, 0],
  //     extrapolate: 'clamp',
  //   });
  return (
    <View
      style={[
        styles.container,
        // {
        //   transform: [
        //     {
        //       translateY: searchBarTranslate,
        //     },
        //   ],
        //   opacity: searchBarOpacity,
        // },
      ]}>
      <TextInput
        placeholder="Search"
        value={props.value}
        style={styles.formField}
        placeholderTextColor={'#888888'}
        onChangeText={props.onChangeText}
        autoFocus={true}
        onKeyPress={(e) => {}}
        // onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        // returnKeyType={'search'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 8,
    backgroundColor: 'transparent',
    width: deviceWidth - 30,
    // left: 12,
    // zIndex: 99,
    // backgroundColor: 'white',
    // borderRadius: 20,
  },
  formField: {
    borderBottomWidth: 1,
    // padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    //  borderRadius: 20,
    borderBottomColor: '#888888',
    fontSize: 18,
    height: 40,
  },
});

export default SearchComponent;
