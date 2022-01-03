import React, {memo} from 'react';
import {View, Modal, ActivityIndicator, Text, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import Label from '../atoms/label';

const LoadingModal = memo(props => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      statusBarTranslucent={true}
      visible={props.visible !== undefined ? props.visible : true}
      onRequestClose={props.onBack}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ActivityIndicator
            size="large"
            style={styles.indicator}
            color={colors.lightBlue}
          />
          <Label title={props.title} fontSize={14} color={colors.black} />
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
  },
  indicator: {
    marginRight: 15,
  },
});

export default LoadingModal;
