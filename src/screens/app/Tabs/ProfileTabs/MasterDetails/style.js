import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  sectionTitle: { 
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.skyblue
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   color:colors.black,

  },
  labelText: {
    flex: 1,
    fontSize: 14,
    margin:2,
    color:colors.black, 
    borderColor: '#ccc',
  },
  valueText: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 8,
    color:colors.black,
  },
});

export default styles;

