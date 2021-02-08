import React from "react";
import { Button } from 'react-native-elements';
import styles from "./../../styles/styles";


const BtnCalculator = (props) => {
    return (
        <Button
            title={props.title}
            raised={true}
            containerStyle={styles.keyboardBtn}
            buttonStyle={[
                styles.keyboardBtnInternal,
                props.stylebutton
            ]}
            titleStyle={styles.keyboardBtnText}
            onPress={() => props.action()}
        />
    );
}

export default BtnCalculator;