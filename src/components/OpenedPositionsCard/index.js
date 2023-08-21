import colors from "../../constants/colors";
import { Text, View } from "react-native";

export default function OpenedPositionsCard() {
  return (
    <View
      style={{
        width: "93%",
        height: 75,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 11,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text,
            opacity: 0.7,
          }}
        >
          BTCUSDT
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "green",
              opacity: 1,
            }}
          >
            LONG
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: colors.text,
              opacity: 0.55,
            }}
          >
            10X
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "red",
            opacity: 1,
          }}
        >
          -10.7%
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: colors.text,
            opacity: 0.55,
            alignSelf: "center",
          }}
        >
          (-$268.2)
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text,
            opacity: 0.7,
          }}
        >
          $100K
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: colors.text,
            opacity: 0.55,
            alignSelf: "center",
          }}
        >
          (3.67)
        </Text>
      </View>

      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          color: colors.text,
          opacity: 0.45,
          alignSelf: "center",
        }}
      >
        16h ago
      </Text>
    </View>
  );
}
