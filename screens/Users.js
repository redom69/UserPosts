import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import ListItem from '../components/ListItem'

export default ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (<>
        {loading ?
            <ActivityIndicator style={[styles.container, styles.horizontal]} size="large" />
            :
            <View style={styles.container}>

                <FlatList
                    style={styles.list}
                    data={users}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) => <ListItem title={item.name} onPress={() => navigation.navigate('PostsScreen', { user_id: item.id, name: item.name })} />}
                />
            </View>
        }
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
