import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: THEME.fonts.title700,
        color: THEME.colors.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: THEME.fonts.text400,
        color: THEME.colors.highlight,
        fontSize: 13,
    },
});