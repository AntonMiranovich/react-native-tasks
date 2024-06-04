import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screen/Home'
import Task1 from './src/screen/Task1/Task1'
import Task2 from './src/screen/Task2/Task2'
import Task3 from './src/screen/Task3/Task3'
import Task4 from './src/screen/Task4/Task4'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Task1' component={Task1} />
        <Stack.Screen name='Task2' component={Task2} />
        <Stack.Screen name='Task3' component={Task3} />
        <Stack.Screen name='Task4' component={Task4} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}