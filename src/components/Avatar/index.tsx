import React from 'react';
import {
    Image
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { THEME } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props){
    const {secondary50, secondary70} = THEME.colors;
    
    return(
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
            <Image source={{uri: urlImage}} style={styles.avatar} />
        </LinearGradient>
    );
}