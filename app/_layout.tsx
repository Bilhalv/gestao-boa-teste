import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot } from "expo-router";
import getPages from "@/hooks/getPages";
import { useState, useEffect } from "react";

export default function RootLayout() {
  return (
    <View style={{
      backgroundColor: "#272B33",
      flexDirection: "column",
      gap: 10,
      padding: 10,
      minHeight: "100%"
    }}>
      <Slot />
    </View>
  );
}