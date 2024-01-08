import React from "react";
import { View, TextInput, StyleSheet, TextInputProps, Image } from "react-native";
import EyeSvg from "../assets/eye.svg";
import EyeHiddenSvg from "../assets/eye-hidden.svg";

import { ButtonCircularDefault } from "./ButtonCircularDefault";

export type InputProps = {
  inputDataSecret?: boolean;
} & TextInputProps;

export function Input({ inputDataSecret = false, ...rest }: InputProps) {
  const [textSecret, setTextSecret] = React.useState(false);
  return (
    <View style={styles.container}>
      {inputDataSecret && (
        <View
          style={[styles.containerIcon, { backgroundColor: "transparent" }]}
        />
      )}
      <TextInput
        {...rest}
        clearButtonMode="never"
        style={styles.input}
        verticalAlign="middle"
        textAlign="center"
        secureTextEntry={textSecret}
        cursorColor={"#F4F4F4"}
      />
      {inputDataSecret && (
        <ButtonCircularDefault
          onPress={() => setTextSecret(!textSecret)}
          defaultColor="#40424a"
          hoveredColor="#f9f9f9"
          labelColor="#c6c6c7"
          labelHoveredColor="#171717">
          {textSecret ? (
            <Image source={EyeSvg} style={styles.icon} />
          ) : (
            <Image source={EyeHiddenSvg} style={styles.icon} />
          )}
        </ButtonCircularDefault>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    width: 410,
    padding: 8,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#f0eeee",
    color: "#f0eeee",
    backgroundColor: "#474953",
    marginHorizontal: 12,
  },
  containerIcon: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#3d434e",
    marginLeft: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#cacaca",
    height: 16,
    width: 16,
  },
});
