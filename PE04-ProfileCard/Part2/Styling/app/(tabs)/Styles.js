import { StyleSheet, Dimensions, Platform  } from 'react-native'

const screenHeight = Dimensions.get('window').height;
const statusBarHeight = Platform.OS === 'ios' ? 40 : 20;
const availableHeight = screenHeight - statusBarHeight - 40;
const expandedCardHeight = Math.min(230, availableHeight / 3 * 0.9);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: statusBarHeight + 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    maxWidth: 340, 
    justifyContent: 'center', 
  },
  cardContainer: { 
    flexBasis: '50%', 
    paddingHorizontal: 3, 
    marginVertical: 3,
    alignItems: 'center', 
    justifyContent: 'center',
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardContentWrapper: { 
    width: '100%', 
    height: expandedCardHeight,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2.5,
    borderRadius: 18,
    backgroundColor: 'dodgerblue',
    paddingVertical: 8,
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    }) 
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  textContentContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 3,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  thumbnailCardName: {
    fontSize: 12,
  },
  cardOccupationContainer: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1.2,
    paddingBottom: 1,
    marginBottom: 3,
    alignSelf: 'stretch',
    marginHorizontal: '12%',
  },
  cardOccupation: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
  thumbnailCardOccupation: {
    fontSize: 10,
  },
  cardDescription: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    paddingHorizontal: 2,
    marginTop: 2,
  },
  thumbnailCardDescription: {
    fontSize: 8,
  },
  cardThumbnail: {
    transform: [{ scale: 0.5}],
  },
});

export default styles;