import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const nome = "Salomão";

  return (
    <View>
      <Text>Jogo da Velha</Text>
      <Text>Vencedor</Text>

      <View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
