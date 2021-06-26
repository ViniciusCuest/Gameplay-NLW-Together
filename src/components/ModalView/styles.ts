import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: THEME.colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: THEME.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    }
});