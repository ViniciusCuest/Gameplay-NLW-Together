import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import { THEME } from '../../global/styles/theme';
import {styles} from './styles';

export default function ButtonAdd({...rest} : RectButtonProps){
    return(
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" color={THEME.colors.heading} size={24}/>
        </RectButton>
    );
}