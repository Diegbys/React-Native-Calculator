import React, { useState } from "react";
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "./../styles/styles";
import BtnCalculator from "./../components/atoms/button";
import { cos } from "react-native-reanimated";

const Calculator = ({ navigation }) => {

    let buttons = [
        { title: "(", color: 2, action: 4 },
        { title: ")", color: 2, action: 4 },
        { title: "C", color: 2, action: 2 },
        { title: "CA", color: 2, action: 3 },
        { title: "7", color: 1, action: 1 },
        { title: "8", color: 1, action: 1 },
        { title: "9", color: 1, action: 1 },
        { title: "/", color: 2, action: 4 },
        { title: "4", color: 1, action: 1 },
        { title: "5", color: 1, action: 1 },
        { title: "6", color: 1, action: 1 },
        { title: "X", color: 2, action: 4 },
        { title: "1", color: 1, action: 1 },
        { title: "2", color: 1, action: 1 },
        { title: "3", color: 1, action: 1 },
        { title: "-", color: 2, action: 4 },
        { title: "0", color: 1, action: 1 },
        { title: "1", color: 1, action: 1 },
        { title: "=", color: 3, action: 5 },
        { title: "+", color: 2, action: 4 },

    ]

    const [showText, setShowText] = useState('');
    const [preText, setPreText] = useState([]);

    function obtainColorButton(type) {
        let auxColor = ''
        switch (type) {
            case 1:
                auxColor = styles.keyboardBtnInternal_number;
                break;
            case 2:
                auxColor = styles.keyboardBtnInternal_operator;
                break;
            case 3:
                auxColor = styles.keyboardBtnInternal_equals;
                break;
        }
        return auxColor;
    }

    function chooseAction(button) {
        let aux = '';
        switch (button.action) {
            case 1:
                aux = showCaract(button.title);
                break;
            case 2:
                aux = clear();
                break;
            case 3:
                aux = clearAll();
                break;
            case 4:
                aux = operator(button.title);
                break;
            case 5:
                aux = calculate();
                break;
        }

        return aux;
    }

    function showCaract(caract) {
        setShowText(showText + caract);
    }

    function clear() {
        let arrayShowText = showText.split('');
        arrayShowText.pop();
        setShowText(arrayShowText.join(''))
    }

    function clearAll() {
        setShowText('');
        setPreText([])
    }

    function operator(caract) {
        if (preText == 0) {
            let pt = []
            pt.push(showText, caract);
            setPreText(pt);
        } else {
            preText.push(showText, caract);
            setPreText(preText);
        }
        setShowText('');
    }

    function getPrec(el) {
        if (el == '(' || el == ')') {
            return 3;
        } else if (el == '-' || el == '+') {
            return 2;
        } else if (el == 'X' || el == '/') {
            return 1;
        }

        return 0;
    }

    function isOperator(el) {
        return ['-', '+', '/', 'X'].includes(el);
    }

    function calculate() {
        preText.push(showText);
        setPreText(preText);
        let firtArray = []
        let secondArray = []



        setPreText(preText.filter(el => el != ''));


        console.log('ANTES')
        console.log(preText);
        console.log('-----------------------------')


        preText.forEach(element => {
            console.log('')
            console.log('NUEVA VUELTA')
            if (element == '(') {
                console.log('abrete')
                console.log(element);
                secondArray.push(element);
                console.log('------------------------------')
            } else if (element == ')') {
                console.log('cierrate');
                console.log(secondArray);
                while (secondArray.length > 0 && secondArray[secondArray.length - 1] != '(') {
                    firtArray.push(secondArray.pop());
                }

                if (secondArray[secondArray.length - 1] == '(') {
                    secondArray.pop();
                }

                console.log(firtArray)
                console.log(secondArray)
                console.log('-------------------------')
            } else if (isOperator(element)) {
                while (secondArray.length > 0 && getPrec(element) >= getPrec(secondArray[secondArray.length - 1])) {
                    firtArray.push(secondArray.pop());
                }

                secondArray.push(element);
            } else {
                firtArray.push(element);
            }
        })

        while (secondArray.length > 0) {
            firtArray.push(secondArray.pop());
        }

        firtArray = firtArray.filter(el => el != '');


        console.log('')
        console.log('FINAL')
        console.log(firtArray);
        console.log("---------------------------------------");
        console.log(secondArray);

        while (firtArray.length != 1) {
            let con = true;

            for (let i = 0; con; i++) {
                if (['+', '-', 'X', '/'].includes(firtArray[i])) {
                    con = false;
                    let a = firtArray[i - 1];
                    let b = firtArray[i - 2];
                    let result = '';
                    let operatorCalc = firtArray[i]
                    console.log(a)
                    console.log(b)
                    console.log(operatorCalc)



                    if (operatorCalc == "+") {
                        result = parseFloat(a) + parseFloat(b);
                    } else if (operatorCalc == "-") {
                        result = parseFloat(b) - parseFloat(a);
                    }
                    else if (operatorCalc == "X") {
                        result = parseFloat(b) * parseFloat(a);
                    }
                    else if (operatorCalc == "/") {
                        result = parseFloat(b) / parseFloat(a);
                    }
                    firtArray.splice(i - 2, 3, result);
                }
            }
        }

        setShowText(firtArray.join(''));
        setPreText('');

    }

    return (
        <SafeAreaProvider>
            <View style={styles.showResult}>
                <Text style={styles.showText}>{showText}</Text>
                <Text style={styles.showPreText}>{(preText.length != 0) ? preText.join('') : ' '}</Text>
            </View>
            <View style={styles.keyboard}>
                {buttons.map((button, index) =>
                    <BtnCalculator
                        key={index}
                        title={button.title}
                        stylebutton={obtainColorButton(button.color)}
                        action={() => chooseAction(button)}
                    />
                )}

            </View>
        </SafeAreaProvider>
    );
}

export default Calculator;