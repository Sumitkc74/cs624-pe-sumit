import { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                                source={require('../../assets/images/user.png')} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}> Sumit K C</Text>
                        <Text style={styles.designationText}>React Native Developer</Text>
                        <Text style={styles.descriptionText}> Sumit is a React Native learner. He likes learning about React Native and developing mobile applications.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 10
    },
    cardImage: {
        width: 90,
        height: 90
    },
    textContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    designationText: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    descriptionText: {
        marginTop: 15,
        fontSize: 16,
        marginLeft: 30,
        marginRight: 30
    }
});
