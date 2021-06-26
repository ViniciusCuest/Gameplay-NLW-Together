import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: THEME.colors.secondary40,
        color: THEME.colors.heading,
        borderRadius: 8,
        fontFamily: THEME.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: THEME.colors.secondary50,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top',
    }
});