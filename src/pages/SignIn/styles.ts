import {StyleSheet} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: THEME.colors.heading,
        fontSize: 40,
        fontFamily: THEME.fonts.title700,
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        color: THEME.colors.heading,
        fontSize: 15,
        fontFamily: THEME.fonts.title500,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25,
    }
});