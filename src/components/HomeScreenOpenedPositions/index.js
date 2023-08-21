import OpenedPositionsCard from "../OpenedPositionsCard";
import colors from "../../constants/colors";
import { Text, View } from "react-native";

export default function HomeScreenOpenedPositions() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingTop: 30,
      }}
    >
      <OpenedPositionsCard />
    </View>
  );
}
