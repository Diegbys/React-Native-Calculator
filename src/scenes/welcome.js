import React from "react";
import { View, Animated } from 'react-native';
import { Text, Button, ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "./../styles/styles";

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <View style={styles.mainContainer}>
                <Text h2 style={styles.welcomeText}> ¡Bienvenido a calculadorita reactiva!</Text>
                <ThemeProvider>
                    <Button
                        type="outline"
                        containerStyle={styles.welcomeBtn}
                        title="Continuar"
                        style={styles.welcomeBtn}
                        onPress={() => navigation.push('Calculator')}

                    />
                </ThemeProvider>
            </View>
        </SafeAreaProvider>
    );
}

export default Welcome;