import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    label: {
        fontSize: 18,
        fontFamily: THEME.fonts.title700,
        color: THEME.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: THEME.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: THEME.colors.secondary40,
        borderWidth: 1,
        borderColor: THEME.colors.secondary50,
        borderRadius: 8,
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: THEME.fonts.text500,
        color: THEME.colors.highlight
    },
    limit: {
        fontFamily: THEME.fonts.text400,
        fontSize: 13,
        color: THEME.colors.highlight
    },
    footer:{
       paddingVertical: 20,
       marginBottom: 56 
    }
});