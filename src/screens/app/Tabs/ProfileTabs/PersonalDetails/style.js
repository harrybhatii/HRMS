import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    justifyContent: 'space-between',
    paddingBottom: 310,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.skyblue,
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.black,
    marginTop: 5,
  },
  labelText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 2,
    paddingBottom: 2,
    height: 21,
    paddingTop: 2,
    color: '#2B2A2A',
  },
  valueText: {
    flex: 1,
    flexWrap:'wrap',
    fontSize: 14,
    paddingRight: 20,
    fontWeight: '400',
    color: '#6C757D',
    height: 21,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 5,
    marginLeft: 5,
    alignItems: 'center',
    marginTop: 5,

  },
});

export default styles;
