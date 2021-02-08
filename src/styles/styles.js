import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222f3e',
        padding: 5
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white'
    },
    welcomeBtn:{
        marginTop: 50,
        width: '50%',
    },
    showResult:{
        width:'90%',
        height: 50,
        backgroundColor: '#cecece',
        marginTop: 20,
        alignSelf: 'center',
        position: 'relative',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5
    },
    showText:{
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20
    },
    showPreText:{
        position: 'absolute',
        right: 5,
        bottom: 5,
        opacity: 0.4
    },
    keyboard: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    keyboardBtn: {
        width: '23%',
        marginHorizontal: '1%',
        marginTop: 10,
        height: 60,
        color: 'black'
    },
    keyboardBtnInternal:{
        height: '100%'
    },
    keyboardBtnText:{
        color: 'black'
    },
    keyboardBtnInternal_number:{
        backgroundColor: '#f8f9fa',
    },
    keyboardBtnInternal_operator:{
        backgroundColor: '#dadce0',
    },
    keyboardBtnInternal_equals:{
        backgroundColor: '#4285f4',
    }
});

export default styles;