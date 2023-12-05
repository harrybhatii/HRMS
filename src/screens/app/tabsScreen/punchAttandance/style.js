import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor:colors.white,
      },
      status: {
        textAlign:'center',
        fontSize: 20,
        marginBottom: 24,
        backgroundColor:colors.midgrey,
      },
      button: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
});
export default styles;
