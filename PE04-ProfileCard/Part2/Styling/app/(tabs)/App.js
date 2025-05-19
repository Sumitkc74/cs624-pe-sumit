import React, { Component } from 'react';
import update from 'immutability-helper';
import { View } from 'react-native';
import styles from './Styles'
import ProfileCard from './ProfileCard'

const userImage = require('../../assets/images/user.png');

const userProfileDetails = {
  name: 'Sumit K C',
  occupation: 'React Developer',
  description: 'Sumit is a React Native learner. He likes learning about React Native and developing mobile applications.',
};

const numberOfCards = 6;

const data = Array(numberOfCards).fill(null).map((_, index) => ({
  image: userImage,
  ...userProfileDetails,
  showThumbnail: true,
}));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  handleProfileCardPress = (selectedIndex) => {
    const { data } = this.state;
    const currentlySelectedIsThumbnail = data[selectedIndex].showThumbnail;

    const newData = data.map((item, index) => {
      if (index === selectedIndex) {
        return update(item, { showThumbnail: { $set: !item.showThumbnail } });
      } else if (currentlySelectedIsThumbnail) {
        return update(item, { showThumbnail: { $set: true } });
      } else {
        return item;
      }
    });

    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    const list = data.map((item, index) => (
      <ProfileCard key={`card-${index}`} {...item} onPress={() => this.handleProfileCardPress(index)} />
    ));

    return (
      <View style={styles.appContainer}>
        <View style={styles.galleryContainer}>{list}</View>
      </View>
    );
  }
}
