import TradeCard from "../TradeCard";
import colors from "../../constants/colors";
import { Dimensions, Text, View } from "react-native";

const { height, width } = Dimensions.get("window");

export default function HomeScreenRecentTrades() {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: width / 2,
          height: 155,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TradeCard />
      </View>
    </View>
  );
}
