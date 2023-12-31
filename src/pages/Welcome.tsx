import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import font from '../styles/fonts'
import fonts from '../styles/fonts'

export const Welcome = () => {
  return(
    <SafeAreaView style={styles.constainer}>
      <View style={styles.wrapper}>
        <Text  style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text  style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text>
            <Feather
              name="chevron-right"
              style={styles.buttonIcon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    constainer: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 20
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 38,
      fontFamily: fonts.heading,
      lineHeight: 34
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading,
      fontFamily: fonts.text
    },
    button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width: 56,
    },
    image: {
      height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
      fontSize: 32,
      color: colors.white,
    }
});
