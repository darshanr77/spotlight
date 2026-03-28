import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}> 

      <Text style={styles.text}>
        Hello this is main page of our project
      </Text>

      <TouchableOpacity 
        style={styles.touch} 
        onPress={() => alert("you pressed the button")}
      >
        <Text style={styles.buttonText}>
          Click
        </Text>
      </TouchableOpacity>

      <Image 
        style={styles.img}
        source={require("/home/darshan/Desktop/SpotLight/spotlight/assets/images/icon.png")}
      />

      <Link href="/profile">
        <Text style={styles.text}>
          profile
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  text: {
    color: "#c63636",
    fontSize: 29,
    fontWeight: "500",
    marginBottom: 30,
  },
  buttonText: {
    color: "#c63636",
    fontSize: 29,
    fontWeight: "500",
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,           // Makes it circular
    borderWidth: 4,             // ← Add this
    borderColor: "#ffffff",     // ← Add this (white border)
    marginTop: 40,
  },
  touch: {
    backgroundColor: "#ffffff", // Important: Add background so border is visible
    borderWidth: 3,             // ← Add this
    borderColor: "#c63636",     // Red border
    borderRadius: 20,
    marginTop: 30,
  },
});