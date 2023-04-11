import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#fea6a8" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    textTransform: "capitalize",
    borderRadius: 6,
    backgroundColor: "#e35254",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#000000",
    padding: 8,
  },
});
