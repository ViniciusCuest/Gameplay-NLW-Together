import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import PlayerSVG from '../../assets/player.svg';
import CalendarSVG from '../../assets/calendar.svg';

import GuildIcon from '../GuildIcon';
import { styles } from './styles';
import { THEME } from '../../global/styles/theme';
import { categories } from '../../utils/categories';

import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
};
type Props = RectButtonProps & {
    data: AppointmentProps;
};

export default function Appointment({data, ...rest} : Props){
    const [category] = categories.filter(item => item.id === data.category);
    const {owner} = data.guild;
    const { primary, on, secondary50, secondary70} = THEME.colors;

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <LinearGradient colors={[secondary50, secondary70]} style={styles.guildIconContainer}>
                    <GuildIcon iconId={data.guild.icon} guildId={data.guild.id} />
                </LinearGradient>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSVG/>
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.playerInfo}>
                        <PlayerSVG fill={owner ? primary : on} />
                        <Text style={[styles.player, {color: owner ? primary : on}]}>
                            { owner ? 'Anfitrião' : 'Visitante' }
                        </Text>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}