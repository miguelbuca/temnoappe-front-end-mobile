import React from 'react'
import { View, Text } from 'react-native'
import { MainProps } from '../../../interface/components'

import { StyleSheet } from 'react-native'

const Main = ({ children }: MainProps) => {
    return (
        <View style={styles.container}>
            {
                children
            }
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 20
    }
})
