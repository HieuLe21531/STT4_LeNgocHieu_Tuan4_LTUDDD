import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
//Download via npm and import API
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from "@expo/vector-icons";

/*
  Access data
*/
var data = [
  {
    uid: 'sa',
    pw: 'sapassword'
  },
  {
    uid: 'admin',
    pw: 'admin'
  }
]

export default function App() {
  const [uid, setUid] = useState("");
  const [pw, setPw] = useState("");

  //Save UID and PW
  const handleUserNameChange = (text) => {
    setUid(text);
  };

  const handlePassWordChange = (text) => {
    setPw(text);
  };

  //Check PW
  function checkPassword() {
    var correct = false;
    data.forEach((item) => {
      if (uid == item.uid && pw == item.pw) {
        correct = true;
      }
    })
    console.log(correct);
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FBCB00", "#BF9A00"]} locations={[0, 0.85, 1]} style={{ flex: 1 }}>
        <View style={styles.view1}>
          <Text style={styles.textView1}>LOGIN</Text>
        </View>

        <View style={styles.view2}>
          <View style={styles.view2Input}>
            <View style={styles.viewInput1}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_640.png",
                }}
                style={{ marginLeft: 5, width: 30, height: 40 }}
              ></Image>
              <TextInput
                style={styles.input1}
                placeholder="Name"
                value={username}
                onChangeText={handleUserNameChange}
              />
            </View>

            <View style={styles.viewInput2}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2023/06/05/09/12/security-8041759_640.png",
                }}
                style={{ marginLeft: 5, width: 30, height: 43 }}
              ></Image>
              <TextInput
                style={styles.input2}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={handlePassWordChange}
              />
              <TouchableOpacity>
                <FontAwesome name="eye" size={50} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity style={styles.touch} onPress={checkPassword}>
            <View style={styles.viewTouch}>
              <Text style={styles.textTouch}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.view4}>
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
            CREATE ACCOUNT
          </Text>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
  },
  view1: {
    flex: 2,
    justifyContent: "flex-end",
    marginLeft: 40,
  },
  view2: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 50,
  },
  view3: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
  view4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-start",
    marginBottom: 60,
  },
  textView1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  view2Input:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center"
  },
  input1: {
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  viewInput1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5DB53",
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  input2: {
    marginLeft: 10,
    width: 270,
    height: 50,
  },
  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5DB53",
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  touch: {
    marginTop: 80,
    width: 320,
    height: 45,
    backgroundColor: "black",
    borderRadius: 5,
  },
  viewTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouch: {
    fontWeight: "bold",
    color: "white",
  },
});
