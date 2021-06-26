import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 27, 
    },
    title: {
        fontFamily: THEME.fonts.title700,
        color: THEME.colors.heading,
        fontSize: 18
    },
    subtitle: {
        fontFamily: THEME.fonts.text400,
        color: THEME.colors.highlight,
        fontSize: 13
    }
});