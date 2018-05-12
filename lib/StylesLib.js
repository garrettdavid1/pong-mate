import { StyleSheet, Dimensions } from 'react-native';
import colors from './constants/Colors';

const styles = {
    fullDeviceHeight: Dimensions.get('window').height,
    fullDeviceWidth: Dimensions.get('window').width
}

export const stylesLib = StyleSheet.create({
    centeredScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
    },
    screen: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: styles.fullDeviceHeight,
        height: styles.fullDeviceWidth,
        backgroundColor: colors.green
    }
})