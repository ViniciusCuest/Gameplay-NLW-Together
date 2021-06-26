import React from 'react';

import {
    View,
    ActivityIndicator
} from 'react-native';

import { styles } from './styles';
import { THEME } from '../../global/styles/theme';

export function Load(){
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color={THEME.colors.primary} />
        </View>
    );
}