import React from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import {useAuth} from '../../hooks/auth';

import ButtonIcon from '../../components/ButtonIcon';

import Img from '../../assets/illustration.png';
import { styles } from './styles';
import { THEME } from '../../global/styles/theme';

export default function SignIn(){

    const {user, loading, signIn} = useAuth();

    async function handleSignIn(){
        try{
            await signIn();
        }
        catch (err){
            Alert.alert("Erro no SignIn", err);
        }
    }

    return(
        <View style={styles.container}>
            <Image source={Img} style={styles.image} resizeMode="stretch" />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'} e organize suas {'\n'} jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
                </Text>
                {
                loading ? 
                    <ActivityIndicator color={THEME.colors.primary} />
                :
                    <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" activeOpacity={0.6}/>
                }
            </View>
        </View>
    );
}