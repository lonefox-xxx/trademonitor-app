import * as Progress from "react-native-progress";
import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";
import { Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { height, width } = Dimensions.get('window')

const Account = () => {
    const [Dimention, setDimention] = useState(null);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
            <StatusBar barStyle="default" backgroundColor="black" translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, gap: 35, paddingBottom: 50, }} bounces={false}>
                <View style={styles.hedder_container}>
                    <Text style={styles.headder_text}>Account</Text>
                    <Text style={styles.headder_text}></Text>
                </View>

                {/* Fund Info */}
                <View style={styles.fundInfo_container}>
                    <View style={styles.fundInfo_container_left}>
                        <View style={styles.fundInfo_avtar} />
                        <View style={styles.fundInfo_text_wraper}>
                            <View style={styles.fundInfo_mainText_wrapper}>
                                <Text style={styles.fundInfo_mainText}>
                                    1234.87K
                                </Text>
                                <Text style={styles.fundInfo_mainText_usd}>
                                    USD
                                </Text>
                            </View>
                            <Text style={styles.fundInfo_secondaryText}>1224.29K</Text>
                        </View>
                    </View>
                    <View style={styles.fundInfo_container_right}>
                        <TouchableOpacity style={styles.fundinfo_button} >
                            <Text style={styles.fundInfo_button_text}>Take Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Fund History */}
                <View style={styles.fundHistory_container}>
                    <View style={{ width: '50%', height: '50%', backgroundColor: colors.black, borderRadius: 30, zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                            <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', letterSpacing: 2 }}>Today</Text>
                            <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1, opacity: 0.6, }}>178 USD</Text>
                        </View>
                    </View>

                    <View style={{ width: '50%', height: '50%', backgroundColor: colors.tertiary, borderRadius: 30, zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                            <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', letterSpacing: 1 }}>This Week</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1, opacity: 0.7 }}>1.1K</Text>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', opacity: 0.5, alignSelf: 'center', }}>
                                    USD
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '50%', height: '50%', backgroundColor: colors.tertiary, borderRadius: 30, zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                            <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', letterSpacing: 0 }}>This Month</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1, opacity: 0.7 }}>6.3K</Text>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', opacity: 0.5, alignSelf: 'center', }}>
                                    USD
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '50%', height: '50%', backgroundColor: colors.black, borderRadius: 30, zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                            <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', letterSpacing: 2 }}>This Year</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', letterSpacing: 1, opacity: 0.6 }}>86.6K</Text>
                                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold', opacity: 0.4, alignSelf: 'center', }}>
                                    USD
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '20%', height: '20%', position: 'absolute', alignSelf: 'center', backgroundColor: colors.tertiary, left: '40%' }}></View>
                </View>

                {/* CHART */}
                <View style={styles.chard_container_main}>
                    <View style={styles.chart_container}>
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ],
                                legend: ["Account Growth"]

                            }}
                            width={Dimensions.get("window").width * 0.95} // from react-native
                            height={250}
                            yAxisInterval={1} // optional, defaults to 1
                            withVerticalLabels={true}
                            withHorizontalLabels={true}
                            withHorizontalLines={false}
                            withVerticalLines={false}
                            withShadow={false}
                            chartConfig={{
                                backgroundGradientFrom: colors.secondary,
                                backgroundGradientTo: colors.primery,
                                color: (opacity = 1) => colors.tertiary,
                                labelColor: () => `rgba(255, 255, 255, 0.3)`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "0",
                                    strokeWidth: "10",
                                    stroke: ""
                                },
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressBar_container_main}>
                    <View style={styles.progressBar_wraper}>
                        <View style={{ alignItems: 'center', gap: 8, width: '25%' }}>
                            <Progress.Circle thickness={4} color={colors.secondary} borderWidth={0.45} showsText={true} progress={.64} size={55} formatText={(t) => t = '64%'} textStyle={{ fontSize: 14, fontWeight: 'bold', color: colors.quaternary }} />
                            <View style={{ alignItems: 'center', gap: 2 }}>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.5, fontWeight: 'bold' }}>Daily</Text>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.4, fontWeight: 'bold' }}>178 / 300</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', gap: 8, width: '25%' }}>
                            <Progress.Circle thickness={4} color={colors.secondary} borderWidth={0.45} showsText={true} progress={.54} size={55} formatText={(t) => t = '54%'} textStyle={{ fontSize: 14, fontWeight: 'bold', color: colors.quaternary }} />
                            <View style={{ alignItems: 'center', gap: 2 }}>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.5, fontWeight: 'bold' }}>Weakly</Text>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.4, fontWeight: 'bold' }}>1.1K / 2.1K</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', gap: 8, width: '25%' }}>
                            <Progress.Circle thickness={4} color={colors.secondary} borderWidth={0.45} showsText={true} progress={.34} size={55} formatText={(t) => t = '34%'} textStyle={{ fontSize: 14, fontWeight: 'bold', color: colors.quaternary }} />
                            <View style={{ alignItems: 'center', gap: 2 }}>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.5, fontWeight: 'bold' }}>Monthly</Text>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.4, fontWeight: 'bold' }}>6.3K / 10K</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', gap: 8, width: '25%' }}>
                            <Progress.Circle thickness={4} color={colors.secondary} borderWidth={0.45} showsText={true} progress={.24} size={55} formatText={(t) => t = '24%'} textStyle={{ fontSize: 14, fontWeight: 'bold', color: colors.quaternary }} />
                            <View style={{ alignItems: 'center', gap: 2 }}>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.5, fontWeight: 'bold' }}>Yearly</Text>
                                <Text style={{ color: colors.text, fontSize: 13, opacity: 0.4, fontWeight: 'bold' }}>86.6K / 100K</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Account Info */}
                <View style={styles.accoundInfo_container_main}>
                    <View style={styles.accountInfo_container}>
                        <View style={styles.accountInfo_container_first}>
                            <View style={{ width: '50%', gap: 20, alignItems: 'flex-start' }}>
                                <View style={{ width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Total Balcnce</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                        <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>
                                            1234.87K
                                        </Text>
                                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold', opacity: 0.5, marginLeft: 10, alignSelf: 'center' }}>
                                            USD
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Available</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                        <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>
                                            1224.29K
                                        </Text>
                                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold', opacity: 0.5, marginLeft: 10, alignSelf: 'center' }}>
                                            USD
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View onLayout={(e) => setDimention(e.nativeEvent.layout)} style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                {Dimention && (
                                    <LineChart
                                        data={{
                                            labels: ["January", "February", "March", "April", "May", "June"],
                                            datasets: [
                                                {
                                                    data: [
                                                        10,
                                                        12,
                                                        11,
                                                        13,
                                                        15,
                                                        14
                                                    ]
                                                }
                                            ],
                                            // legend: ["Rainy Days"]
                                        }}
                                        width={Dimention.width} // from react-native
                                        height={125}
                                        yAxisInterval={0} // optional, defaults to 1
                                        yLabelsOffset={35}
                                        withVerticalLabels={true}
                                        withHorizontalLabels={true}
                                        withHorizontalLines={false}
                                        withVerticalLines={false}
                                        withShadow={false}
                                        // formatYLabel={(e) => {
                                        //     console.log(e);
                                        // }}
                                        chartConfig={{
                                            // backgroundGradientFrom: colors.secondary,
                                            // backgroundGradientTo: colors.primery,
                                            color: (opacity = 1) => colors.tertiary,
                                            labelColor: () => `rgba(255, 255, 255, 0.3)`,
                                            style: {
                                                borderRadius: 16
                                            },
                                            propsForDots: {
                                                r: "0",
                                                strokeWidth: "0",
                                                stroke: ""
                                            },
                                        }}
                                        bezier
                                        style={{
                                            marginVertical: 8,
                                            borderRadius: 16
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: colors.white, fontSize: 100, fontWeight: 'bold', opacity: 0.8 }}>12
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 0.5 }}>Take Out's</Text>
                                </Text>
                            </View>
                            <View style={{ width: '50%', gap: 20, alignItems: 'flex-end' }}>
                                <View style={{ width: '100%', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Total Withdeawn</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                        <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>
                                            648.87K
                                        </Text>
                                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold', opacity: 0.5, marginLeft: 10, alignSelf: 'center' }}>
                                            USD
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                                    <Text style={{ color: colors.white, fontSize: 15, fontWeight: 'bold', opacity: 0.6 }}>Pending Withdeaw</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                        <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>
                                            0.00
                                        </Text>
                                        <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold', opacity: 0.5, marginLeft: 10, alignSelf: 'center' }}>
                                            USD
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Recent Transactions */}
                <View style={{ alignItems: 'flex-start', gap: 30 }}>
                    <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold', opacity: 0.8, marginLeft: 15 }}>Recent Transactions</Text>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', gap: 15 }}>
                        <View style={{ width: '90%', height: 80, backgroundColor: colors.white, opacity: 0.2, borderRadius: 9 }}></View>
                        <View style={{ width: '90%', height: 80, backgroundColor: colors.white, opacity: 0.2, borderRadius: 9 }}></View>
                        <View style={{ width: '90%', height: 80, backgroundColor: colors.white, opacity: 0.2, borderRadius: 9 }}></View>
                        <View style={{ width: '90%', height: 80, backgroundColor: colors.white, opacity: 0.2, borderRadius: 9 }}></View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >

    );
}


export default Account;
const styles = StyleSheet.create({
    accountInfo_container_first: {
        width: '100%',
        flexDirection: 'row',
    },
    accountInfo_container: {
        width: '90%',
        borderRadius: 22,
        alignItems: 'flex-start',
        padding: 20,
        gap: 20,
    },
    accoundInfo_container_main: { alignItems: 'center', },
    progressBar_wraper: {
        width: '98%',
        // height: ,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    progressBar_container_main: {
        flex: 1,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chart_container: {
        width: '95%',
        height: '90%',
        borderRadius: 9,
    },
    chard_container_main: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundHistory_container: {
        width: '84%',
        height: height * 0.35,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    fundInfo_button_text: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },
    fundinfo_button: {
        width: 100,
        height: 45,
        borderRadius: 50,
        backgroundColor: colors.tertiary,
        // opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundInfo_container_right: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 10,
    },
    fundInfo_secondaryText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.7,
        alignSelf: 'flex-start',
    },
    fundInfo_mainText_usd: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        opacity: 0.5,
        marginLeft: 10,
        alignSelf: 'center',
    },
    fundInfo_mainText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    fundInfo_mainText_wrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    fundInfo_text_wraper: {
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
    },
    fundInfo_avtar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: colors.white,
        opacity: 0.1,
    },
    fundInfo_container_left: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 10,
    },
    fundInfo_container: {
        height: 85,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    headder_text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    hedder_container: {
        marginTop: '15%',
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
})