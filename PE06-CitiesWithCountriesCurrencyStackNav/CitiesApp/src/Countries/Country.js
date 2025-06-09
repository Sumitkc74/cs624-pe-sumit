import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Country extends React.Component {
  state = {
    name: '',
    info: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addLocalCurrency = () => {
    const { addLocalCurrency, country } = this.props.route.params;
    const { name, info } = this.state;

    if (name === '' || info === '') return;

    const localCurrency = { name, info };

    addLocalCurrency(localCurrency, country);

    this.setState({ name: '', info: '' });
  };

  render() {
    const { countries, country } = this.props.route.params;

    const updatedCountry = countries.find((item) => item.id === country.id) || country;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!updatedCountry.localCurrencies.length && { flex: 1 }]}>
          <View
            style={[
              styles.localCurrenciesContainer,
              !updatedCountry.localCurrencies.length && { flex: 1, justifyContent: 'center' },
            ]}
          >
            {!updatedCountry.localCurrencies.length && <CenterMessage message="No currency for this country!" />}
            {updatedCountry.localCurrencies.map((localCurrency, index) => (
              <View key={index} style={styles.localCurrencyContainer}>
                <Text style={styles.localCurrencyName}>{localCurrency.name}</Text>
                <Text style={styles.localCurrencyInfo}>{localCurrency.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TextInput
          onChangeText={(val) => this.onChangeText('name', val)}
          placeholder="Currency name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText('info', val)}
          placeholder="Currency info"
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocalCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Local Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  localCurrenciesContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  localCurrencyContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  localCurrencyName: {
    fontSize: 20,
  },
  localCurrencyInfo: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Country;