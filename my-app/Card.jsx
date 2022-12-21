import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";

const Card = ({ icon, name, size, updated, updatedHandler }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={{
            uri: icon,
          }}
        />
        <View>
          <Text>{name}</Text>
          <Text>{size} mb</Text>
        </View>
      </View>
      <View></View>

      <Pressable
        onPress={() => updatedHandler(name, updated)}
        style={{ ...styles.buttonWrapper }}
      >
        {updated ? (
          <Text style={{ color: "green" }}>Open</Text>
        ) : (
          <Text style={{ color: "green" }}>UPDATE</Text>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 2,
  },
});

export default Card;
