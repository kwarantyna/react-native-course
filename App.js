import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoal] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGolaHandler() {
    setModalIsVisible(false);
  }

  // to add goal to list
  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGolaHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New GOAL"
          color="#e35254"
          onPress={startAddGoalHandler}
        />
        {
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCancel={endAddGolaHandler}
          />
        }
        <View style={styles.listOfGoals}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            // way of identifying item using unique identifictor in object - named different than key
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  listOfGoals: {
    flex: 5,
  },
});
