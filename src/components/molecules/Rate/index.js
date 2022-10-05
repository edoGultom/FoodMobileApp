import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOff, IcStarOn } from '../../../assets'
import Number from '../Number'

const Rate = ({ number }) => {
    const renderStar = () => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= number) {
                star.push(<IcStarOn key={i} />);
            } else {
                star.push(<IcStarOff key={i} />)
            }
        }
        return star;
    }
    return (
        <View style={styles.rateContainer}>
            <View style={styles.starContainer}>
                {renderStar()}
            </View>
            <Number number={number} type="decimal" style={styles.numberRate} />
        </View>
    )
}

export default Rate

const styles = StyleSheet.create({
    rateContainer: {
        flexDirection: 'row',
    },
    starContainer: {
        flexDirection: 'row',
        marginRight: 4
    },
    numberRate: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    }
})