import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Auth",
      }}
    >
      <Stack.Screen name="login" />
    </Stack>
  );
}
