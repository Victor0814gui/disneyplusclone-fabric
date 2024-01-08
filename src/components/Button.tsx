import { useRef } from "react"
import { Animated, Text,Pressable,StyleSheet, PressableProps } from "react-native"





export const Button = (props: {
  text: string,
} & PressableProps) => {
  const animation = useRef(new Animated.Value(4)).current;

  const onMouseEnter = () => {
    Animated.spring(
      animation,
      {
        useNativeDriver: false,
        toValue: 21,
      }
    ).start();
  }

  const onMouseLeave = () => {
    Animated.spring(
      animation,
      {
        useNativeDriver: false,
        toValue: 4,
      }
    ).start();
  }

  const onPressIn = () => {
    Animated.spring(
      animation,
      {
        useNativeDriver: false,
        toValue: 34,
      }
    ).start();
  }
  
  const onPressOut = () => {
    onMouseEnter();
  }

  return (
    <Pressable
      {...props} 
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[
          styles.container,
          {
            shadowRadius: animation,
          }
        ]}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 38,
    width: 260,
    backgroundColor: "#00E676",
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 21,
  },
  text:{
    fontWeight: "500",
  }
})