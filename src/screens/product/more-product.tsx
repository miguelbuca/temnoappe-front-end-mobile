import React from 'react'
import { View, Text, Route, StyleSheet, Image, Dimensions } from 'react-native'
import Main from '../../components/template/main'

const { width } = Dimensions.get('screen')

const MoreProduct = ({ route: { params } }: Route) => {
    return (
        <Main>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}  source={{uri: params?.photo}}/>
                </View>
                <View style={{
                    marginBottom: 40
                }}>
                    <Text style={styles.title}>{ params?.name }</Text>
                </View>
                <View>
                    <Text style={styles.desc}>Descrição</Text>
                </View>
                <View>
                    <Text style={styles.title}>{ params?.description }</Text>
                </View>
            </View>
        </Main>
    )
}

export default MoreProduct

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    imageContainer: {
        position: 'relative',
        display: 'flex',
        height: 300
    },
    image: {
        maxWidth: width - 40,
        height: 300
    },
    title: {
        fontSize: 18
    },
    desc: {
        color: '#ccc'
    }
})
