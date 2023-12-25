import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

// export default function HomeScreen({ navigation }) {
export default function HomeScreen({ route }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button
                title="Go to About"
                // to pass name to about
                onPress={() => navigation.navigate("About", {
                    name: "Joshua"
                })} />
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