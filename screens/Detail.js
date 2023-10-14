import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default ({ route }) => {
    const { title, body, name } = route.params;


    return (
        <View style={styles.container}>
            <Text style={styles.bold}>{name}</Text>
            <Text style={styles.italic}>{title}</Text>
            <Text>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 25,
        padding: 15
    },
    italic: {
        fontStyle: 'italic',
        fontSize: 15,
        padding: 15
    },
    underline: {
        textDecorationLine: 'underline'
    }
});
