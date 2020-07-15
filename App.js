import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Button
} from "react-native";
import CalendarStrip from "react-native-slideable-calendar-strip";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./components/TodoList";
import Divider from "./globalComponent/Divider";

export default class App extends React.Component {
  state = {
    addTodoVisible: false
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <View style={{ marginVertical: 48 }}>
            <TouchableOpacity
              style={styles.addList}
              onPress={() => this.toggleAddTodoModal()}
            >
              <AntDesign name="plus" size={16} color={colors.blue} />
            </TouchableOpacity>
            <Text style={styles.add}>Add List</Text>
          </View>
          <TouchableOpacity onPress={() => this.toggleAddTodoModal()}>
            <View
              style={{
                backgroundColor: colors.blue,
                height: 300,
                width: 200,
                borderRadius: 50,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  paddingTop: 150,
                  fontWeight: "800",
                  fontSize: 10,
                  color: colors.white
                }}
              >
                Add List
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Divider />
          <Text style={styles.title}>
            Easy
            <Text style={{ fontWeight: "300", color: colors.blue }}> Todo</Text>
          </Text>
          <Divider />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity
            // style={styles.addList}
            onPress={() => this.toggleAddTodoModal()}
          >
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});
