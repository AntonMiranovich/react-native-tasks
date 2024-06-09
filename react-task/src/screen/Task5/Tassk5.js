import { useRef, useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task5({ navigation }) {
    const date = useRef({ email: '', pass: '' })

    const isInp = (name, value) => [
        date.current = { ...date.current, [name]: value }
    ]


    const checkDate = () => {
        try {
            if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(date.current.email)) throw new Error('Email is invalid')
            if (date.current.pass.length < 8) throw new Error('The password is too short')
            console.log(`Success`);
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <View style={styles.container}>
            <Text>Реализуйте форму для ввода почты и пароля. По клику на кнопку получите
                данные из полей ввода с использованием useRef. Напишите для них валидацию. В
                случае успешного ввода отобразите в console.log сообщение "success".</Text>


            <TextInput onChangeText={(value) => isInp('email', value)} style={{ border: '1px solid black' }} placeholder='Введите Email' />
            <TextInput onChangeText={(value) => isInp('pass', value)} style={{ border: '1px solid black' }} placeholder='Введите Пороль' />
            <Button onPress={checkDate} title='Регистрация' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});