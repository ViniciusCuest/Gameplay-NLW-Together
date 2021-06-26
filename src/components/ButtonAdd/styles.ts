import {
    StyleSheet
} from 'react-native';
import { THEME } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        height: 48,
        width: 48,
        backgroundColor: THEME.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});