import React from 'react';
import {
    View, 
    Text,
    Alert
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import {styles} from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';

export default function Profile(){
    const { user, signOut } = useAuth();

    function handleSignOut(){
        Alert.alert("Sair?","Deseja sair do Gameplay?", 
        [
            {
                text: "Não",
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    signOut();
                }
            }
        ]);
    }

    return(
        <View style={styles.container}>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={[styles.greeting, (user.username.length > 16) && {fontSize: 18}]}>
                        Olá,
                    </Text>
                    <Text style={[styles.username, (user.username.length > 16) && {fontSize: 18}]}>
                        { 
                        user.username
                        }
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de Vitória
                </Text>
            </View>
        </View>
    );
}