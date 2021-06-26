import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    AsyncStorage
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { styles } from './styles';
import {Background} from '../../components/Background';

import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import ListDivider from '../../components/ListDivider';
import Appointment, { AppointmentProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Loading';

export default function Home() {
    const navigation = useNavigation();
    
    const [category, setCategory] = useState("");
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleAppointmentDetails(guildSelect: AppointmentProps){
        navigation.navigate("AppointmentDetails", {guildSelect});
    }

    function handleAppointmentCreate(){
        navigation.navigate("AppointmentCreate");
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    async function LoadAppointments(){
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : []

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }
        else{
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        LoadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>
            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} hasCheckBox={false} />
            {
                loading ? 
                    <Load/>
                :
                <>
                <ListHeader title="Partidas Agendadas" subtitle={`Total ${appointments.length}`} />
            <FlatList data={appointments} keyExtractor={item => String(item.id)} renderItem={({ item }) => (
                    <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />
                )} style={styles.matches} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (
                    <ListDivider />
                )} contentContainerStyle={{paddingBottom: 69}} />
                </>
            }

        </Background>
    );
}
