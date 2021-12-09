import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { CardProps } from '../../../interface/components'

const Card = ({  name ,photo, onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={{
                        uri: photo
                    }}  />
                </View>
                <View style={styles.lastSide}>
                    <Text style={styles.font} >{ name }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100
    },
    lastSide: {
        flex: 1,
        marginLeft: 40,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    font: {
        fontSize: 16
    }
})