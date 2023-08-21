import colors from "../../constants/colors";
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 22,
    marginLeft: "7%",
    opacity: 0.7,
  },
  text_grating: {
    marginTop: "15%",
  },
  text_positions: {
    marginVertical: "0%",
  },
  text_trades: {
    marginBottom: "5%",
  },
  topSection_container: {
    width: width,
    backgroundColor: colors.primery,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    gap: 30,
    paddingBottom: 50,
  },
});

export default styles;
