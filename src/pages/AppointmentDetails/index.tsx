import React, { useState, useEffect } from 'react';
import {
    Text,
    ImageBackground,
    View,
    FlatList,
    Alert,
    Share,
    Platform,
    Linking
} from 'react-native';


import BannerImg from '../../assets/banner.png';
import {styles} from './styles';
import { Background } from '../../components/Background';
import {Fontisto} from '@expo/vector-icons'

import Header from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { THEME } from '../../global/styles/theme';
import ListHeader from '../../components/ListHeader';
import Members, { MemberProps } from '../../components/Members';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Loading';

type Params = {
    guildSelect: AppointmentProps
};

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
};

export default function AppointmentDetails(){
    const route = useRoute();
    const { guildSelect } = route.params as Params;

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);  

    async function fetchGuildWidget(){
        try {
            const response = await api.get(`/guilds/${guildSelect.guild.id}/widget.json`);
            setWidget(response.data);
        }
        catch {
            Alert.alert("Erro com servidor Discord", "Verifique as configurações do servidor. Será que o Widget está habilitado?");
        }
        finally {
            setLoading(false);
        }
    }

    function handleShareInvitation(){
        const message = Platform.OS === 'ios' ? 
        `Junte-se a ${guildSelect.guild.name}`
        :
        widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild(){
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    return(
        <Background>
            <Header title="Detalhes" action={
                guildSelect.guild.owner &&
                <BorderlessButton onPress={handleShareInvitation}>
                    <Fontisto name="share" size={24} color={THEME.colors.primary}/>
                </BorderlessButton>
            }/>

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelect.guild.name}</Text>
                    <Text style={styles.subtitle}>{guildSelect.description}</Text>
                </View>
            </ImageBackground>
            {
                loading ? 
                    <Load/>
                :
            <>
                <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`}/>
                <FlatList data={widget.members} keyExtractor={item => String(item.id)} renderItem={({item}) => (
                    <Members data={item} />
                )} ItemSeparatorComponent={() => (
                    <ListDivider/>
                )} style={styles.members} />
            </>
            }
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na Partida" onPress={handleOpenGuild} />
            </View>
        </Background>
    );
}