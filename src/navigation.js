import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/home";
import WalletScreen from "./screens/wallet";
import PayScreen from "./screens/pay";
import PayButtom from "./components/PayButton";

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    lib: AntDesign,
    IconName: "home",
  },
  Wallet: {
    lib: AntDesign,
    IconName: "creditcard",
  },
  Notifications: {
    lib: Ionicons,
    IconName: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    IconName: "setting",
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == "Pay") {
            return (
              <PayButtom
                focused={focused}
                onPress={() => navigation.navigate("Pay")}
              />
            );
          }
          const { lib: Icon, IconName } = icons[route.name];
          return <Icon name={IconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "",
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: "Notificações",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
