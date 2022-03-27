import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha Peso e Altura");
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator(){
    let heigthFormat = height.replace(",",".")
    let weightFormat = weight.replace(',','.')
    return setImc((weightFormat/(heigthFormat*heigthFormat)).toFixed(2))
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage('*Campo Obrigatório*')
    }
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }
    else{
        verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha Peso e Altura")
    }
}

    return(
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 75.5"
                keyboardType="numeric"
               />

                <TouchableOpacity
                style={styles.button}
                onPress={() => {validationImc()}}               
                >
                   <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
               
            </Pressable>
            : 
            <View stile={styles.showResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                style={styles.button}
                onPress={() => {validationImc()}}               
                >
                   <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity> 
            </View>
            }
        </View>
    );
}