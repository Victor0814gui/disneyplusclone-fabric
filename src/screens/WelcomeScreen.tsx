import React, {useEffect, useRef} from "react";

import {
  View,
  Text,
  BackHandler,
  Image,
  Animated,
  StyleSheet,
} from "react-native";

import {ButtonCheckin} from "../components/ButtonCheckin";
import DisneyPlusLogoSvg from "../assets/original.png";
import DisneyPlusBackgroundImage from "../assets/background-image-disneyplus.jpg";
import DisneySubsidiaresLogo from "../assets/logos.png";
import { Toast } from "../components/Toast";
import { useNavigate } from "react-router-native";
import { routesName } from "../routes";

export function WelcomeScreen() {
  const animationValue = useRef(new Animated.Value(1.1)).current;

  let navigate = useNavigate();

  const animateEnterScreen = () => {
    Animated.timing(animationValue, {
      useNativeDriver: false,
      toValue: 1,
      duration: 450,
    }).start();
  };

  useEffect(() => {
    animateEnterScreen();
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Toast/>
      <Animated.Image
        source={DisneyPlusBackgroundImage}
        resizeMode="cover"
        style={[styles.backgroundImage, {transform: [{scale: animationValue}]}]}
      />
      <View style={styles.content}>
        <Image
          style={[styles.logo]}
          resizeMode="contain"
          source={DisneyPlusLogoSvg}
        />
        {/* <DisneyPlusLogoSvg style={[styles.logo]} /> */}
        <Text style={styles.subtitle}>
          As melhores historias {"\n"}em um só lugar
        </Text>
        <View style={{width: 300}}>
          <ButtonCheckin
            onPress={() => {}}
          />
        </View>
        <Text style={styles.descriptionText}>
          Comece a assistir ao Disney+ por R$33,90/mês ou 279,90R$/ano. os
          preços podem {"\n"} variar em outras modedas ou plataformas
        </Text>
        <Image
          style={styles.brading}
          resizeMode="contain"
          source={DisneySubsidiaresLogo}
        />
        <View style={{marginTop: 28}}>
          <ButtonCheckin
            defaultColor="#40424a"
            hoveredColor="#f9f9f9"
            labelColor="#c6c6c7"
            labelHoveredColor="#171717"
            label="ENTRAR"
            onPress={() => navigate(routesName.signInStepOneScreen)}
          />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1c29",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 71,
    alignItems: "flex-start",
  },
  logo: {
    height: 120,
    width: 120,
    maxWidth: "100%",
  },
  subtitle: {
    fontSize: 30,
    color: "#F4F4F4",
    fontWeight: "600",
    marginBottom: 38,
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#bdbdbe",
    lineHeight: 16,
    marginTop: 12,
  },
  logos: {
    width: 300,
  },
  brading: {
    maxWidth: 350,
    marginTop: 12,
  },
});