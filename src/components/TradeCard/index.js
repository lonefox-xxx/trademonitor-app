import React from "react";
import colors from "../../constants/colors";
import { StyleSheet, Text, View } from "react-native";

const TradeCard = () => {
  return (
    <View
      style={{
        width: "90%",
        height: "85%",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 9,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: colors.text,
            opacity: 0.65,
            alignSelf: "center",
          }}
        >
          BTCUSDT :
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "green",
            opacity: 1,
            alignSelf: "flex-end",
          }}
        >
          {" "}
          Long
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: colors.text,
          opacity: 0.3,
          alignSelf: "flex-start",
        }}
      >
        •2d ago
      </Text>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: "green",
          opacity: 1,
          alignSelf: "flex-end",
          marginTop: 3,
        }}
      >
        + 34.5%
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: colors.text,
          opacity: 0.3,
          alignSelf: "flex-end",
        }}
      >
        {" "}
        $178.98
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TradeCard;
