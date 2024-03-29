import React from "react";
import { View, Text, StyleSheet } from "react-native";


type ToastProps = {
  type?: "success" | "error" | "default" | "warning";
  text?: string;
}

export function Toast({ type = "default", text = "Você está online." }: ToastProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>!</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 21,
    backgroundColor: "#31343e",
    borderRadius: 25,
    position: "absolute",
    top: 41,
    right: 41,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: -3,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    
    elevation: 19,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    // backgroundColor: "#ffb63f",
    backgroundColor: "#72D37E",

    marginRight: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 17,
    color: "#31343e",
    fontWeight: "600",
  },
  text: {
    color: "#F4F4F4",
    fontWeight: "500",
  },
});
