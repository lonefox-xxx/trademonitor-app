import React, { useRef, useState } from "react";
import colors from "../../constants/colors";
import styles from "./style";
import { Dimensions, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

const Transaction = () => {
    const { height } = Dimensions.get('window');
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]
    const scrollref = useRef(null)
    const [allowscroll, setallowscroll] = useState(false)

    function scrolltotop() {
        scrollref.current.scrollTo({ y: 0, animated: true });
    }
    const onscroll = ({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) setallowscroll(true)
        if (ifCloseToTop(nativeEvent)) {
            setallowscroll(false)
            scrolltotop()
        }
    }

    function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    }

    function ifCloseToTop({ layoutMeasurement, contentOffset, contentSize }) {
        return contentOffset.y == 0;
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="default" />
            <View style={styles.home}>
                <View style={styles.card_container}>
                    <View style={styles.card}>
                        <Text style={{ color: colors.text, fontSize: 50, opacity: 0.8 }}>Transactions...!</Text>
                    </View>
                </View>
                <ScrollView onScroll={onscroll} style={styles.scrollView} pagingEnabled viewabilityConfig={{ itemVisiblePercentThreshold: 100 }} snapToAlignment="start" showsVerticalScrollIndicator={false}>
                    <View style={styles.card_placeHolder}></View>
                    <View style={styles.info_container_main}>
                        <View style={{ ...styles.info_container, height: height }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => scrolltotop()} style={styles.scroll_handle_parent}>
                                <View style={styles.scroll_handle} />
                            </TouchableOpacity>
                            <ScrollView ref={scrollref} style={styles.child_scrollview} nestedScrollEnabled={true} scrollEnabled={allowscroll} showsVerticalScrollIndicator={false} >
                                <View style={styles.child_item}>
                                    <Text style={{ color: colors.text }}>Hello</Text>
                                </View>
                                <View style={styles.child_item}>
                                    <Text style={{ color: colors.text }}>Hello</Text>
                                </View>
                                <View style={styles.child_item}>
                                    <Text style={{ color: colors.text }}>Hello</Text>
                                </View>
                                <View style={styles.child_item}>
                                    <Text style={{ color: colors.text }}>top</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Transaction;