import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import FabButton from "./src/components/FabButton";
import Drawer from "./src/components/Drawer";
import Map from "./src/components/Map";

export default function App() {
    return (
        <View style={styles.container}>
            <FabButton style={{ top: 40, left: 20 }} />
            <Map />
            <Drawer />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});