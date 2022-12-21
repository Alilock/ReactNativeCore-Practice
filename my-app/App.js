import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
export default function App() {
  const datas = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
      name: "Facebook",
      size: "446",
      updated: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      name: "Instagram",
      size: "245",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      name: "YouTube",
      size: "975",
      updated: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      name: "Whatsapp",
      size: "119",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
      name: "Linkedin",
      size: "120",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      name: "Twitter",
      size: "89",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3046/3046120.png",
      name: "TikTok",
      size: "985",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
      name: "Gmail",
      size: "991",
      updated: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1409/1409941.png",
      name: "SnapChat",
      size: "446",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/145/145808.png",
      name: "Pinterest",
      size: "245",
      updated: false,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3015/3015832.png",
      name: "Messenger",
      size: "975",
      updated: true,
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
      name: "Spotify",
      size: "119",
      updated: true,
    },
  ];
  const [updatedDatas, setUpdated] = useState(datas);
  const updatedHandler = (name, updated) => {
    const objIndex = updatedDatas.findIndex((e) => e.name == name);
    updatedDatas[objIndex].updated = !updated;
    setUpdated([...updatedDatas]);
  };
  const renderItem = ({ item }) => {
    return (
      <Card
        icon={item.icon}
        name={item.name}
        size={item.size}
        updated={item.updated}
        updatedHandler={updatedHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        ListHeaderComponent={
          <View style={styles.txtWr}>
            <Text style={styles.txt}>On this device({datas.length})</Text>
            <Text style={styles.txt}>Last User -</Text>
          </View>
        }
        ListHeaderComponentStyle={styles.header}
        contentContainerStyle={{
          marginTop: 50,
        }}
        data={updatedDatas}
        renderItem={(item) => renderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  header: {
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 1,
  },
  txt: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: "600",
  },
  txtWr: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
