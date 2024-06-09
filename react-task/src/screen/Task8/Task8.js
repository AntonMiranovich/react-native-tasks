import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task8({ navigation }) {
    const inputRef = useRef()
    const textRef = useRef()

    async function getDate() {
        const date = await axios.get(`http://numbersapi.com/${inputRef.current.value}`)
        textRef.current.textContent = date.data
    }




    return (
        <View style={styles.container}>
            <Text>По клику на кнопку получите числовое value инпута с использованием useRef.
                Отправьте запрос к http://numbersapi.com/:id (где id – значение input). Отобразите
                результат в консоли.
            </Text>

            <TextInput ref={inputRef} style={{ border: '1px solid black' }} placeholder='Ведите рандомное число' />
            <Button title='Получите рандомный текст' onPress={() => getDate()} />

            <Text ref={textRef} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});