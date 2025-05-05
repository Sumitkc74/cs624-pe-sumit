import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({ setType, type }) => {
    return (
        <View style={styles.container}>
            <TabBarItem type={type} title="All"
            setType={() => setType('All')} />
            <TabBarItem type={type} border title="Active"
            setType={() => setType('Active')} />
            <TabBarItem type={type} border title="Complete"
            setType={() => setType('Complete')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    }
})

export default TabBar