import HomeScreenChart from "../../components/HomeScreenChart";
import HomeScreenOpenedPositions from "../../components/HomeScreenOpenedPositions";
import HomeScreenPnL from "../../components/HomeScreenPnL";
import HomeScreenRecentTrades from "../../components/HomeScreenRecentTrades";
import React from "react";
import colors from "../../constants/colors";
import styles from "./style";

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar barStyle="auto" backgroundColor="black" translucent={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, gap: 40 }}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <View style={styles.topSection_container}>
          <Text style={[styles.text, styles.text_grating]}>
            Good Mornig...!
          </Text>
          <HomeScreenChart />
          <HomeScreenPnL />
        </View>
        <View style={{}}>
          <Text style={[styles.text, styles.text_positions]}>
            Opened Positions
          </Text>
          <HomeScreenOpenedPositions />
        </View>

        <View>
          <Text style={[styles.text, styles.text_trades]}>Recent Trades</Text>
          <HomeScreenRecentTrades />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
