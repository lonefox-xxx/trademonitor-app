import colors from "../../constants/colors";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { height, width } = Dimensions.get("window");

export default function HomeScreenChart(props) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          height: 250,
          borderRadius: 25,
        }}
      >
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [7, 12, 15, 13, 18, 21, 25, 24, 26, 33, 36, 25],
              },
            ],
          }}
          width={width * 0.9} // from react-native
          height={250}
          yAxisInterval={1} // optional, defaults to 1
          withVerticalLabels={true}
          withHorizontalLabels={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          xLabelsOffset={0}
          verticalLabelRotation={50}
          withShadow={false}
          chartConfig={{
            backgroundGradientFrom: colors.secondary,
            backgroundGradientTo: colors.primery,
            color: (opacity = 0.1) => colors.tertiary,
            labelColor: () => `rgba(255, 255, 255, 0.15)`,
            propsForDots: {
              r: "0",
              strokeWidth: "0",
              stroke: "",
            },
          }}
          bezier
          style={{
            paddingVertical: 0,
            borderRadius: 16,
          }}
        />
        <View
          style={{
            width: "100%",
            height: "20%",
            position: "absolute",
            top: 20,
            left: 20,
          }}
        >
          <View
            style={{
              width: "60",
              height: "auto",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: "auto",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontSize: 27,
                  fontWeight: "bold",
                  opacity: 0.65,
                }}
              >
                1.23M USD
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 22,
                  fontWeight: "bold",
                  opacity: 0.65,
                  alignSelf: "center",
                }}
              >
                {" "}
                +456.2%
              </Text>
            </View>
            <Text
              style={{
                color: colors.text,
                fontSize: 18,
                fontWeight: "bold",
                opacity: 0.55,
              }}
            >
              1.54M USD
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
