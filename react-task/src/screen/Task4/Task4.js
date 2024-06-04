import { useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task4({ navigation }) {
    const [str, setStr] = useState('')
    const [res, setRes] = useState()


    return (
        <View style={styles.container}>
            <Text>Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /.
            </Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => <Text onPress={() => setStr(str + el)} style={styles.number}>{el}</Text>)}
            </View>

            <View style={{ flexDirection: 'row', gap: 10 }}>
                {['+', '-', '*', '/'].map((el) => <Text onPress={() => setStr(str + el)} style={styles.number}>{el}</Text>)}
            </View>

            <Button title='=' onPress={() => setRes(` = ${eval(str)}`)} />

            <Text> {str}{res}</Text>

            <Button title='Сбросить' onPress={() => { setStr(''), setRes('') }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    number: {
        backgroundColor: 'grey',
        padding: 10
    }
});