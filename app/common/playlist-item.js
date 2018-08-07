import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import D from '@screens/common/dimensions';

export default (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.source} style={[styles.album, props.circle ? styles.circled : {}]} />

            <Text
                style={styles.text}
                numberOfLines={1}
            >{props.getItemTitle(props.item)}</Text>
            <Text
                style={styles.subTitle}
                numberOfLines={1}
            >{props.getItemSubTitle(props.item)}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        width: (D.width * 4.2) / 10,
        marginLeft: 12
    },

    album: {
        width: (D.width * 4.2) / 10,
        height: (D.width * 4.2) / 10,
        backgroundColor: 'transparent'
    },

    img: {
        flex: 1,
        height: null,
        width: null
    },

    text: {
        fontSize: 12,
        color: 'white',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 8,
    },

    subTitle: {
        fontSize: 10,
        color: 'gray',
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: 4
    },

    circled: {
        borderRadius: ((D.width * 4.2) / 10) / 2,
    },
});
