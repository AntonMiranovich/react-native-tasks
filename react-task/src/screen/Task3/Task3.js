import { useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task3({ navigation }) {
    const [size, setSize] = useState(20)


    return (
        <View style={styles.container}>
            <Text>Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и
                "Уменьшить". При нажатии на эти кнопки значение font-size изменяется
                соответствующим образом на +/– 1px (useState).
            </Text>

            <Button title='Увеличить' onPress={() => setSize(size + 1)} />
            <Button title='Уменьшить' onPress={() => setSize(size - 1)} />
            <Text style={{ fontSize: size }}>Control text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});