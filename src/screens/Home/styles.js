import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // container
    container: {
        // flex: 1,
    },
    // image
    background: {
        width: "100%",
        height: 500,
        resizeMode: "cover",
        justifyContent: "center",

    },
    // button
    button: {
        width: 200,
        marginLeft: 25,
        height: 30,
        backgroundColor: "#fff",
        borderWidth: 0,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 75,
        width: '70%',
        marginLeft: 25,
    },

    searchBar: {
        width: Dimensions.get('screen').width - 100,
        height: 50,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        zIndex: 2,
        top: 20,
        marginHorizontal: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 25,

    },
    searchBarText: {
        fontSize: 16,
        fontWeight: 'bold',
    }

});

export default styles;