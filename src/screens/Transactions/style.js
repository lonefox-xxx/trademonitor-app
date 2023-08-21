import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll_handle_parent: {
    width: "100%",
    height: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll_handle: {
    width: "33%",
    height: "15%",
    borderRadius: 50,
    backgroundColor: colors.white,
    opacity: 0.1,
  },
  child_item: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  child_scrollview: {
    flex: 1,
    position: "relative",
  },
  info_container: {
    width: "100%",
    backgroundColor: colors.black,
    zIndex: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  info_container_main: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  card_placeHolder: {
    flex: 1,
    width: "100%",
    height: 350,
    // backgroundColor: colors.quaternary,
  },
  scrollView: {
    flex: 1,
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
  },
  card: {
    width: "98%",
    height: "75%",
    // backgroundColor: colors.secondary,
    marginBottom: 20,
    zIndex: 1,
    elevation: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card_container: {
    width: "100%",
    height: "35%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: colors.text,
  },
  home: {
    flex: 1,
    backgroundColor: colors.primery,
  },
});

export default styles;
