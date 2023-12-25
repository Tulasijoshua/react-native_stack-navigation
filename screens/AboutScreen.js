import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route }) {
    // destructure name passed from home page
    const {name} = route.params;
    // to help use navigation
    const navigation = useNavigation()

    // to set title name on navbar
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [navigation, name])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button 
                title="Update the name"
                onPress={() => navigation.setParams({
                    name: "Tulasi"
                })}
            />
            <Button 
                title="Go back with data"
                onPress={() => navigation.navigate("Home", { result: "Data from about"})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
})