import { Button, Image, Text, View, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Task1')}>Перейти к 1 задаче</Text>
            <Text onPress={() => navigation.navigate('Task2')}>Перейти к 2 задаче</Text>
            <Text onPress={() => navigation.navigate('Task3')}>Перейти к 3 задаче</Text>
            <Text onPress={() => navigation.navigate('Task4')}>Перейти к 4 задаче</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
});