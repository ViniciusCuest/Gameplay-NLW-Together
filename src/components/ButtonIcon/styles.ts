import { StyleSheet } from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        alignItems: 'center',
        backgroundColor: THEME.colors.primary,
        borderRadius: 8,
    },
    title: {
        flex: 1,
        color: THEME.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: THEME.fonts.text500
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: THEME.colors.line
    },
    icon: {
        width: 24,
        height: 18
    }

});