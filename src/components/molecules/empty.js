import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../utils/colors';
import Label from '../atoms/label';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name={'basket'} size={80} color={colors.black} />
      <Label title={'Nothing To See'} type={'medium'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 13,
    color: 'grey',
  },
});

export default EmptyList;
