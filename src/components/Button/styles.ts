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
});