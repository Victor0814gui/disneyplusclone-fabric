import React, { useRef, useEffect, useCallback } from 'react';

import { View, Text, Animated, StyleSheet, Image } from 'react-native';

import DisneyPlusLogoSvg from '../assets/original.png';
import { Input } from '../components/input';
import { ButtonCheckin } from '../components/ButtonCheckin';
import { useNavigate } from 'react-router-native';
import { Page } from '../components/Page';
import { routesName } from '../routes';

export function SignInStepOneScreen() {
  const navigate  = useNavigate();

  const onPress = useCallback(() => {
    navigate(routesName.welcomeScreen);
  }, [])

  return (
    <Page>
      <View style={[styles.container]}>
        <Image resizeMode="contain" source={DisneyPlusLogoSvg} style={[styles.logo]} />
        <Text style={styles.title}>Use o seu e-mail para entrar</Text>
        <Text style={styles.subtitle}>
          Você usara esse email e senha para entrar na conta do Disney+ e assitir
          suas séries {'\n'}e filmes preferidos
        </Text>
        <View style={{ marginBottom: 31 }}>
          <Input placeholder={'digite seu email'} />
        </View>
        <View style={{ width: 320, marginTop: 21 }}>
          <ButtonCheckin onPress={onPress} />
        </View>
      </View>
      </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c29',
    alignItems: 'center',
    paddingTop: 71,
  },
  logo: {
    height: 150,
    width: 150,
    maxWidth: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#f9f9f9',
  },
  subtitle: {
    fontSize: 12,
    color: '#ebecec',
    marginVertical: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
});
