import { StyleSheet } from "react-native";

export default StyleSheet.create({
  color: "#ba0d7b",
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
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
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  containerQuestion: {
    margin: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    maxWidth: 150,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  logo: {
    alignSelf: "center",
  },
});
