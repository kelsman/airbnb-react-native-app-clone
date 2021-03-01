import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather'

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            {/* searchbar */}
            <Pressable style={styles.searchBar} onPress={() => console.info('pressed')}>
                <Icon name="search" size={23} color="red" />
                <Text style={styles.searchBarText}> Where are you going to </Text>
            </Pressable>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.background}
            >

                {/* title */}
                <Text style={styles.title}> Go Near </Text>

                {/* button */}
                <TouchableOpacity style={styles.button} onPress={() => console.warn('button pressed')}>
                    <Text style={styles.buttonText}> Explore nearby places</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default HomeScreen;
