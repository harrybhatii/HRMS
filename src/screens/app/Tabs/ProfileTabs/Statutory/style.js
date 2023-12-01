import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color:colors.skyblue,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    color:colors.black,
  },
  labelText: {
    flex: 1,
    fontSize: 16,
    color:colors.black,
  },
  valueText: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color:colors.black,
  },
});

export default styles;

