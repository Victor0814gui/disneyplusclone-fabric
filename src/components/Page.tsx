import React,{ useRef, useEffect,ReactNode } from "react"
import { View,Animated,StyleSheet } from "react-native"







type PageProps = {
  children: ReactNode;
}

export const Page = (props: PageProps) => {
  const animationScreen = useRef(new Animated.Value(30)).current;

  const animationEnter = () => {
    Animated.spring(
      animationScreen,
      {
        useNativeDriver: false,
        toValue: 0,
      }
    ).start();
  }

  useEffect(() => {
    animationEnter();
  },[]);
  return(
    <Animated.View
      style={[
        styles.container,
        {
          transform:[{
            translateY: animationScreen,
          }]
        }
      ]}
    >
      {props.children}
    </Animated.View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})