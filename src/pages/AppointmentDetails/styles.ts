import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    banner: {
        width: '100%',
        height: 234,
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title:{
        fontSize: 28,
        fontFamily: THEME.fonts.title700,
        color: THEME.colors.heading
    },
    subtitle:{
        fontSize: 13,
        fontFamily: THEME.fonts.text400,
        color: THEME.colors.heading,
        lineHeight: 21
    },
    members: {
        marginLeft: 24,
        marginTop: 27,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
});