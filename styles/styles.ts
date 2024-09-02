import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 30,
    },
});

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 20
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
    }
})