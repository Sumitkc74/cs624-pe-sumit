import PropTypes from 'prop-types';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import styles from './Styles';

const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  const cardContainerStyles = [styles.cardContainer];
  if (showThumbnail) {
    cardContainerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight
      style={cardContainerStyles}
      onPress={onPress}
      underlayColor="rgba(0,0,0,0.05)" 
    >
      <View style={styles.cardContentWrapper}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View style={styles.textContentContainer}>
          <Text style={[styles.cardName, showThumbnail && styles.thumbnailCardName]}>{name}</Text>
          <View style={styles.cardOccupationContainer}>
            <Text style={[styles.cardOccupation, showThumbnail && styles.thumbnailCardOccupation]}>
              {occupation}
            </Text>
          </View>
          <Text
            style={[styles.cardDescription, showThumbnail && styles.thumbnailCardDescription]}
            ellipsizeMode={showThumbnail ? 'tail' : undefined}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
};

export default ProfileCard;