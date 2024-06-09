import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task7({ navigation }) {
    const textRef = useRef()

    async function getDate() {
        const date = await axios.get('https://api.ipify.org/?format=json')
        textRef.current.textContent = date.data.ip
    }

    useEffect(() => {
        getDate()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Используйте useRef для хранения ссылки на тег h1 в HTML. Ваша задача: при
                первичном рендеринге отправить запрос на https://api.ipify.org/?format=json.
                Отобразите результат в textContent элемента h1.
            </Text>


            <Text ref={textRef} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});