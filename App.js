import Account from "./src/screens/Account";
import Feeds from "./src/screens/Feeds";
import Home from "./src/screens/Home";
import Trades from "./src/screens/Trades";
import Transaction from "./src/screens/Transactions";
import colors from "./src/constants/colors";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <NavigationContainer
        theme={{ colors: { backgroundColor: "red" } }}
        sceneContainerStyle={{}}
        initialRouteName="Home"
      >
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            showLabel: false,
            labelStyle: {
              fontSize: 15,
            },
            tabStyle: {
              backgroundColor: "#1c1a1f",
            },
          }}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.tertiary,
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              borderTopWidth: 0,
              height: 70,
              width: width,
              alignSelf: "center",
            },
          }}
        >
          <Tab.Screen
            name="Trades"
            component={Trades}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="areachart" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="account-circle"
                  color={color}
                  size={size * 1}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size * 1.3} />
              ),
            }}
          />

          <Tab.Screen
            name="Feeds"
            component={Feeds}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="newspaper-sharp"
                  size={size * 1}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Transaction"
            component={Transaction}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="swap-vert" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
