import { StyleSheet } from "react-native";

export default StyleSheet.create({
  color: "#e67e22",
  appBackground: {
    backgroundColor: "#4834d4",
  },
  headerTitle: {
    backgroundColor: "#686de0",
    height: '100%',
  },
  tabBar: {
    backgroundColor: "#686de0",
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#4834d4",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ba0d7b",
    borderWidth: 1,
    width: 200,
    height: 40,
    padding: 5,
    marginTop: 25,
    marginBottom: 10,
  },
  question: {
    fontSize: 25,
    borderColor: "black",
    borderWidth: 4,
    backgroundColor: "#ba0d7b",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  answer: {
    fontSize: 15,
    borderColor: "black",
    borderWidth: 4,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  containerQuestion: {
   margin: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
    paddingHorizontal: 82,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    alignSelf: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 3,
    color: "white",
  },
  logo: {
    alignSelf: "center",
  },
  validateButton: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 80,
    borderRadius: 4,
    backgroundColor: "green",
    alignSelf: "center",
  },
  infoGame: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  scoreStyle: {
    color: "#f1c40f",
    fontSize: 30,
    fontWeight: "bold",
  },
});
