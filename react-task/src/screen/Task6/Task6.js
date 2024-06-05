import { useEffect, useRef, useState } from 'react';
import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Task6({ navigation }) {
    const textRef = useRef()

    return (
        <View style={styles.container}>
            <Text>Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и
                "Уменьшить". При нажатии на эти кнопки значение font-size изменяется
                соответствующим образом на +/– 1px. (useRef)
            </Text>

            <Button title='Увеличить' onPress={() => textRef.current.style = `font-size:${+textRef.current.style.fontSize.slice(0, -2) + 1}px`} />
            <Button title='Уменьшить' onPress={() => textRef.current.style = `font-size:${+textRef.current.style.fontSize.slice(0, -2) - 1}px`} />
            <Text ref={textRef} style={{ fontSize: 20 }}>Control text</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
});