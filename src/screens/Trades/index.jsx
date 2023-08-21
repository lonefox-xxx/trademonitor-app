import * as Progress from "react-native-progress";
import React from "react";
import colors from "../../constants/colors";
import { BlurView } from "expo-blur";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { VictoryPie } from "victory-native";

const { height, width } = Dimensions.get('window')

const Trades = () => {

    const data = [
        {
            name: "Long",
            population: 10,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Short",
            population: 8,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
            <StatusBar barStyle="default" backgroundColor="black" translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, gap: 25, paddingBottom: 30, alignItems: 'flex-start' }} bounces={false}>
                <View style={{ width: '95%', height: 185, alignSelf: 'center', marginTop: 100, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <View style={{ width: '55%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', }}>
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [{ data: [100, 220, 100, 300, 500, 456] }],
                            }}
                            width={(width * 0.95) * 0.55}
                            height={185 * 0.5}
                            withVerticalLabels={false}
                            withHorizontalLabels={false}
                            withHorizontalLines={false}
                            withVerticalLines={false}
                            withShadow={false}
                            chartConfig={{
                                backgroundGradientFrom: colors.black,
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientToOpacity: 0,
                                backgroundGradientTo: colors.black,
                                color: (opacity = 1) => colors.tertiary,
                                // labelColor: () => `rgba(255, 255, 255, 0.3)`,
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "10",
                                    stroke: ""
                                },
                            }}
                            bezier
                        />
                        <BlurView intensity={15} tint="light" style={{ width: '100%', height: '95%', position: 'absolute', borderRadius: 9, padding: '8%', gap: 10 }} >
                            <Text style={{ color: colors.text, fontSize: 22, fontWeight: 'bold', opacity: 0.8, }}>Total Trades : 148</Text>
                            <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold', opacity: 0.7, }}>Today : 2</Text>
                            <Text style={{ color: colors.text, fontSize: 18, fontWeight: 'bold', opacity: 0.65, }}>This.month : 75</Text>
                            <Text style={{ color: colors.text, fontSize: 16, fontWeight: 'bold', opacity: 0.6, }}>This.year : 148</Text>
                        </BlurView>
                    </View>
                    <View style={{ width: '45%', height: '100%' }}>
                        <View style={{ width: '100%', height: '52%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <View style={{ width: '95%', height: '95%', borderRadius: 9, }}>
                                <View style={{ width: '100%', height: '30%', paddingHorizontal: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', textAlign: 'left', opacity: 1, }}>WinRate</Text>
                                </View>
                                <View style={{ width: '100%', height: '70%', flexDirection: 'row', justifyContent: 'space-around', gap: 20, paddingVertical: 5, paddingHorizontal: '5%' }}>
                                    <View style={{ height: '100%', gap: 5 }}>
                                        <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', textAlign: 'left', opacity: 0.8, }}>Win : 91</Text>
                                        <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', textAlign: 'left', opacity: 0.8, }}>Lose : 57</Text>
                                    </View>
                                    <Progress.Circle color={colors.tertiary} borderWidth={0.15} showsText={true} progress={.64} size={45} formatText={(f) => f = '64%'} textStyle={{ fontSize: 13, fontWeight: 'bold', color: colors.quaternary }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '48%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <View style={{ width: '95%', height: '95%', borderRadius: 9, backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                <View style={{ width: '100%', height: '35%', justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 15 }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', }}>Long/Short Ratio</Text>
                                </View>
                                <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'relative', }}>
                                    <View style={{ width: '60%', height: '100%', position: 'absolute', alignSelf: 'flex-end', gap: 5, alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 1, opacity: 0.8, }}>Long : 97</Text>
                                        <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 1, opacity: 0.8, }}>Short : 89</Text>
                                    </View>
                                    <VictoryPie
                                        height={140}
                                        width={200}
                                        colorScale={["#51f059", "#d91616",]}
                                        animate={{
                                            duration: 500
                                        }}
                                        innerRadius={13}
                                        labelPosition={({ index }) => ""}
                                        origin={{ y: 22, x: 40 }}
                                        labels={({ datum }) => ``}
                                        data={[
                                            { x: "Long", y: 97 },
                                            { x: "Short", y: 89 },
                                        ]}
                                    />

                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginHorizontal: '3%', opacity: 0.7, }}>All Closed Trades</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={{ width: '50%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '92%', height: '90%', backgroundColor: colors.white, opacity: 0.1, borderRadius: 7 }}></View>
                    </View>
                    <View style={{ width: '50%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '92%', height: '90%', backgroundColor: colors.white, opacity: 0.1, borderRadius: 7 }}></View>
                    </View>
                    <View style={{ width: '50%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '92%', height: '90%', backgroundColor: colors.white, opacity: 0.1, borderRadius: 7 }}></View>
                    </View>
                    <View style={{ width: '50%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '92%', height: '90%', backgroundColor: colors.white, opacity: 0.1, borderRadius: 7 }}></View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({})

export default Trades;
