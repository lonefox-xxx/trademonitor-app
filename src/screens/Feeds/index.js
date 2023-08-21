import React, { useEffect, useMemo, useRef, useState } from "react";
import colors from "../../constants/colors";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { VictoryPie } from "victory-native";

const { height, width } = Dimensions.get("window");
const Feeds = () => {
  const data = [1, 2, 3, 4, 5];
  const { width } = Dimensions.get("window");
  const flatlstref = useRef(null);
  const [item, setItem] = useState(1);

  // useEffect(() => {
  //     if (flatlstref.current === null) return;

  //     const childCount = flatlstref.current.props.data.length;
  //     const delay = 3000;
  //     const interval = setInterval(() => {
  //         if (item >= childCount) {
  //             flatlstref.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 });
  //             return setItem(1);
  //         }
  //         setItem(prev => prev + 1);
  //         flatlstref.current.scrollToIndex({ animated: true, index: item, viewPosition: 0.5 });
  //     }, delay);

  //     return () => {
  //         clearInterval(interval);
  //     };
  // }, [item, flatlstref]);

  const renderListItem = ({ item }) => (
    <View
      style={{
        width: 350,
        height: 230,
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "rgba(169, 103, 219, 0.25)",
        borderRadius: 10,
      }}
    >
      <View style={{ width: "100%", height: "33%", flexDirection: "row" }}>
        <View
          style={{
            width: "25%",
            height: "100%",
            borderWidth: 0.2,
            borderColor: colors.white,
            borderRadius: 7,
          }}
        ></View>
        <View
          style={{ height: "100%", padding: "2%", justifyContent: "center" }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 22,
                fontWeight: "bold",
                letterSpacing: 1,
                opacity: 0.7,
              }}
            >
              BTC :
            </Text>
            <Text
              style={{
                color: colors.white,
                fontSize: 22,
                fontWeight: "bold",
                opacity: 0.6,
                alignSelf: "center",
              }}
            >
              25,928.34
            </Text>
            <Text
              style={{
                color: "green",
                fontSize: 15,
                fontWeight: "bold",
                opacity: 0.8,
                alignSelf: "center",
              }}
            >
              +24.5%
            </Text>
          </View>
          <Text
            style={{
              color: colors.white,
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: "1%",
              opacity: 0.4,
            }}
          >
            Vol-24h : 3.67B $
          </Text>
        </View>
      </View>

      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [{ data: [100, 200, 300, 400, 500, 600] }],
          legend: ["BTC This Week"],
        }}
        width={350}
        height={144}
        withVerticalLabels={false}
        withHorizontalLabels={true}
        withHorizontalLines={false}
        withVerticalLines={false}
        withShadow={false}
        chartConfig={{
          backgroundGradientFrom: colors.tertiary,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          backgroundGradientTo: colors.tertiary,
          color: (opacity = 1) => colors.tertiary,
          labelColor: () => `rgba(255, 255, 255, 0.3)`,
          propsForDots: {
            r: "0",
            strokeWidth: "10",
            stroke: "",
          },
        }}
        bezier
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar
        barStyle="default"
        backgroundColor="black"
        translucent={true}
      />

      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 35,
          paddingBottom: 30,
          alignItems: "flex-start",
        }}
        bounces={false}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 70,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: "4%",
              opacity: 0.8,
            }}
          >
            Live Market
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 14,
              fontWeight: "bold",
              marginLeft: "4%",
              opacity: 0.6,
            }}
          >
            Sunday
          </Text>
        </View>

        <View
          style={{
            width: width,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 22,
              fontWeight: "bold",
              opacity: 0.8,
              marginLeft: "5%",
            }}
          >
            Watch List
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 22,
              fontWeight: "bold",
              opacity: 0.8,
              marginRight: "4%",
            }}
          >
            +
          </Text>
        </View>
        <FlatList
          ref={flatlstref}
          data={data}
          maxToRenderPerBatch={0}
          updateCellsBatchingPeriod={1000}
          renderItem={renderListItem}
          keyExtractor={(item) => item.toString()}
          nestedScrollEnabled
          horizontal
          // pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
        />

        {/* Other content */}
        <View
          style={{
            width: "95%",
            height: height * 0.56,
            alignItems: "flex-start",
            justifyContent: "space-between",
            alignSelf: "center",
            borderRadius: 10,
            paddingVertical: 25,
          }}
        >
          {/* Global market data */}
          <View
            style={{
              width: "100%",
              height: height * 0.22,
              alignSelf: "center",
              borderRadius: 10,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 20,
                fontWeight: "bold",
                opacity: 0.8,
                marginLeft: "3%",
                marginTop: "3%",
              }}
            >
              • Market Dominace{" "}
            </Text>
            <View
              style={{
                width: "100%",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <VictoryPie
                height={height * 0.28}
                width={width * 0.5}
                labelRadius={({ innerRadius }) => innerRadius + 6}
                radius={({ datum }) => 0 + datum.y * 2.1}
                innerRadius={60}
                padding={{ top: 0, bottom: 29, left: 0, right: 20 }}
                style={{
                  labels: { fill: "gray", fontSize: 0, fontWeight: "bold" },
                }}
                colorScale={[
                  "orange",
                  "gray",
                  "green",
                  "black",
                  "brown",
                  "white",
                ]}
                data={[
                  { x: "BTC", y: 46.72 },
                  { x: "ETH", y: 22.56 },
                  { x: "TETHER", y: 0.42 },
                  { x: "XRP", y: 9.25 },
                  { x: "DOGE", y: 0.23 },
                  { x: "OTHERS", y: 20.82 },
                ]}
              />
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  paddingVertical: "6%",
                  paddingHorizontal: "6%",
                  gap: 8,
                  opacity: 0.65,
                }}
              >
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Btc : 46.72 %{" "}
                </Text>
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Eth : 22.56 %{" "}
                </Text>
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Tether : 0.42 %{" "}
                </Text>
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Xrp : 9.25 %{" "}
                </Text>
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Doge : 0.23 %{" "}
                </Text>
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Others : 20.82 %{" "}
                </Text>
              </View>
            </View>
          </View>
          {/* Market Data */}
          <View
            style={{
              width: "100%",
              alignSelf: "center",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 20,
                fontWeight: "bold",
                opacity: 0.8,
                marginLeft: "3%",
                marginTop: "3%",
              }}
            >
              • Market Status
            </Text>
            <View
              style={{
                width: "95%",
                alignItems: "flex-start",
                alignSelf: "center",
                gap: 6,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: "bold",
                  opacity: 0.8,
                  marginLeft: "3%",
                  marginTop: "3%",
                  opacity: 0.6,
                }}
              >
                Total MarketCap : 1.05T USD{" "}
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: "bold",
                  opacity: 0.8,
                  marginLeft: "3%",
                  marginTop: "3%",
                  opacity: 0.6,
                }}
              >
                Total 24hVolume : 38.77B USD{" "}
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: "bold",
                  opacity: 0.8,
                  marginLeft: "3%",
                  marginTop: "3%",
                  opacity: 0.6,
                }}
              >
                Total Exchanges : 661{" "}
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 17,
                  fontWeight: "bold",
                  opacity: 0.8,
                  marginLeft: "3%",
                  marginTop: "3%",
                  opacity: 0.6,
                }}
              >
                Total Coins : 28959{" "}
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            fontWeight: "bold",
            marginLeft: "5%",
            opacity: 0.8,
          }}
        >
          Market Feeds
        </Text>
        <View
          style={{
            width: "95%",
            height: height * 0.52,
            backgroundColor: colors.white,
            opacity: 0.15,
            alignSelf: "center",
            borderRadius: 10,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feeds;
