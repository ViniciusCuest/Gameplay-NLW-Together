import React from 'react';
import {
    View, 
    Image,
    Text,
} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import DiscordLogo from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
}

export default function ButtonIcon({ title, ...rest }: Props){
    return(
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordLogo} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}