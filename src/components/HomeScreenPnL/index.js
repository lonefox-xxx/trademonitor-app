import colors from "../../constants/colors";
import { Text, View } from "react-native";

function HomeScreenPnlCard({ data, title }) {
  return (
    <View
      style={{
        width: "45%",
        height: 120,
        backgroundColor: "rgba(255,255,255 ,0.1)",
        borderRadius: 11,
        padding: 15,
        gap: 0,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "left",
          opacity: 0.7,
          marginBottom: 10,
        }}
      >
        •{title} +{data.pnlper}%
      </Text>
      <Text
        style={{
          color: "green",
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        + {data.pnl} USD
      </Text>
      <Text
        style={{
          color: colors.text,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "right",
          opacity: 0.5,
        }}
      >
        {data.unrealized} USD
      </Text>
    </View>
  );
}

export default function HomeScreenPnL() {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <HomeScreenPnlCard
        title={"Today"}
        data={{ pnlper: "6.5", pnl: "178", unrealized: "209.5" }}
      />
      <HomeScreenPnlCard
        title={"Th.mon"}
        data={{ pnlper: "38.5", pnl: "68.5K", unrealized: "79.7K" }}
      />
    </View>
  );
}
