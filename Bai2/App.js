import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+';
    let charset = 'abcdefghijklmnopqrstuvwxyz';

    if (includeUppercase) {
      charset += uppercaseChars;
    }

    if (includeNumber) {
      charset += numberChars;
    }

    if (includeSpecialChars) {
      charset += specialChars;
    }

    let generatedPassword = '';
    for (let i = 0; i < parseInt(length); i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 16 }}>Password: {password}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        onChangeText={(text) => setLength(text)}
        value={length}
        placeholder="Enter length of password"
        keyboardType="numeric"
      />
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <CheckBox
          value={includeUppercase}
          onValueChange={(value) => setIncludeUppercase(value)}
        />
        <Text style={{ marginLeft: 8 }}>Include Uppercase</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <CheckBox
          value={includeNumber}
          onValueChange={(value) => setIncludeNumber(value)}
        />
        <Text style={{ marginLeft: 8 }}>Include Numbers</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <CheckBox
          value={includeSpecialChars}
          onValueChange={(value) => setIncludeSpecialChars(value)}
        />
        <Text style={{ marginLeft: 8 }}>Include Special Characters</Text>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 4 }}
        onPress={generatePassword}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Generate Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
