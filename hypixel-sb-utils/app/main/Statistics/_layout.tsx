import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function StatisticsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#05BFDB",
      }}
    >
        <Tabs.Screen
            name="profile"
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="stats"
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="home" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
        name="combat"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="mining"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
