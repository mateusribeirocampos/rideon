import { ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./home.style.js";

export default function Home() {
  return (
    <>
      <ImageBackground source={icons.bck} resizeMode="cover" style={styles.bck}>
        <Image source={icons.lgreen} style={styles.logo}></Image>

        <TouchableOpacity style={styles.btn}>
          <Image source={icons.passenger} style={styles.img}></Image>
          <Text style={styles.title}>Passageiros</Text>
          <Text style={styles.text}>Encontre uma carona para você</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.btn}>
          <Image source={icons.driver} style={styles.img}></Image>
          <Text style={styles.title}>Motoristas</Text>
          <Text style={styles.text}>Ofereça carona no seu carro</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
