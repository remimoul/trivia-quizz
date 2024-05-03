import Home from './components/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Category from './components/category';
import Gameview from './components/gameview';
import style from './style';
import About from './components/about';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let name = 'asterisk';

          if (route.name === 'Accueil') name = 'home';
          else if (route.name === 'About') name = 'question';
          else if (route.name === 'Résultat') name = 'trophy';

          return <FontAwesome name={name} size={35} color={style.color} />;
        },
        tabBarActiveTintColor: '#ba0d7b',
        tabBarInactiveTintColor: '#333333',
        tabBarStyle: style.tabBar,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Accueil" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="About" component={About} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Gameview" component={Gameview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
