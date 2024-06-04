import { useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task1({ navigation }) {
    const [date, setDate] = useState({ email: '', email: '' })

    const isInp = (name, value) => [
        setDate({ ...date, [name]: value })
    ]

    const checkDate = () => {
        if (date) {
            console.log(date);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Реализуйте форму для ввода почты и пароля. По клику на кнопку получите
                данные из полей ввода с использованием useState. Напишите для них валидацию.
                В случае успешного ввода отобразите в console.log сообщение "success"</Text>

            <TextInput onChangeText={(value) => isInp('email', value)} style={styles.inp} placeholder='Введите Email' />
            <TextInput onChangeText={(value) => isInp('pass', value)} style={styles.inp} placeholder='Введите Пороль' />
            <Button onPress={checkDate} title='Регистрация' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});