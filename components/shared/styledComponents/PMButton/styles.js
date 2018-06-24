import { StyleSheet, Platform } from 'react-native';
import colors from '../../../../lib/constants/Colors';

export const styles = StyleSheet.create({
    button: Platform.OS === 'ios' ? 
    { 
        height: 40, 
        marginRight: 10,
        backgroundColor: colors.green,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5
    } :
    {
        height: 40, 
        marginRight: 10,
        backgroundColor: '#2196F3',
        elevation: 4,
        backgroundColor: colors.green,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5
    },
    buttonText: Platform.OS === 'ios' ? 
    {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
    } :
    {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
    }
})