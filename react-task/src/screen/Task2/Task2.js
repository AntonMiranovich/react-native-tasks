import { useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task2({ navigation }) {
    const [data, setData] = useState(['Component1', 'Component2', 'Component3', 'Component4'])
    const [flag, setFlag] = useState(false)
    const [textBtn, setTextBtn] = useState('Choose')


    return (
        <View style={styles.container}>
            <Text>Создайте компонент выпадающего списка, который позволяет выбрать одно из
                нескольких заранее определённых значений параметра.</Text>
            <Button title={textBtn} onPress={() => setFlag(!flag)} />
            <View style={{ display: flag ? 'block' : 'none'}}>
                {data.map((el) => <Text onPress={() => {
                    setTextBtn(el)
                    setFlag(!flag)
                }} style={{ width: '100%', display: 'block' }}>{el}</Text>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});