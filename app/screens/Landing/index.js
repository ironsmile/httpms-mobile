/**
 * Created by ggoma on 12/22/16.
 */
import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import Header from '@screens/common/header';
import img from '@screens/common/imgs';
import PlayList from '@components/playlist';
import { gs } from '@styles/global';

export default class Landing extends Component {

    state = {
        playlists: this.generatePlaylists(img, 5)
    };

    title = [
        'Just For You',
        'Recently Played',
        'Inspired by your Recent Listening',
        'New Music Friday!'
    ];

    generatePlaylists(array, size) {
        let results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        return results;
    }

    renderPlaylists() {
        return this.state.playlists.map((playlist, i) => {
            if(i == 0) return <PlayList title={this.title[i]} items={playlist} key={i} circle/>
            return (
                <PlayList title={this.title[i]} items={playlist} key={i}/>
            )
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderPlaylists()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
