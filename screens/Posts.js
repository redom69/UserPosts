import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import ListItem from '../components/ListItem'


export default ({ navigation, route }) => {
    const { user_id, name } = route.params;
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (<>
        {loading ?
            <ActivityIndicator style={[styles.container, styles.horizontal]} size="large" />
            :
            <View style={styles.container}>

                <FlatList
                    style={styles.list}
                    data={posts.filter(x => x.userId === user_id)}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) => <ListItem title={item.title} onPress={() => navigation.navigate('DetailScreen', { title: item.title, body: item.body, name: name })} />}
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
