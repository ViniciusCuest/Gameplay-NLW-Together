import React, { useState } from 'react';
import {
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    AsyncStorage
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';

import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';

import {styles} from './styles';
import { THEME } from '../../global/styles/theme';
import {Feather} from '@expo/vector-icons';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Guilds from '../Guilds';
import { GuildProps } from '../../components/Guild';

import uuid from 'react-native-uuid';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/native';

export default function AppointmentCreate(){
    const navigation = useNavigation();

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    function handleOpenGuilds(){
        setOpenGuildsModal(true);
    }
    function handleGuildSelect(guildSelect : GuildProps){
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }
    function handleCloseGuilds(){
        setOpenGuildsModal(false);
    }
    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    async function handleSave(){
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        };
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const appointments = storage ? JSON.parse(storage) : [];
        
        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

        navigation.navigate('Home');
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView>
                <Background>
                    <Header title="Agendar Partida"/>
                    <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
                        Categoria
                    </Text>
                    <CategorySelect setCategory={handleCategorySelect} categorySelected={category} hasCheckBox/>
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                            { 
                                guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <View style={styles.image} />
                            }

                                <View style={ styles.selectBody}>
                                    <Text style={styles.label}>
                                        { guild.name ? guild.name : 'Selecione um Servidor' }
                                    </Text>
                                </View>
                                <Feather name="chevron-right" color={THEME.colors.heading} size={18} />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Dia e Mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setDay} />  
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMonth} />  
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Hora e Minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} onChangeText={setHour} />  
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} onChangeText={setMinute} />  
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>
                            <Text style={styles.limit}>
                                Máx 100 caracteres 
                            </Text>
                        </View>
                        <TextArea maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescription} multiline/>
                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSave}/>
                        </View>
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    );
}