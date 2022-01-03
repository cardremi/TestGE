import React from 'react';
import {StyleSheet, Modal, View, TouchableOpacity} from 'react-native';
import Label from '../../components/atoms/label';
import colors from '../../utils/colors';

const ModalFilter = ({
  onBackgroundPress,
  filterAtoZ,
  filterZtoA,
  filterNewest,
  filterOldest,
  stateFilter,
}) => {
  return (
    <Modal animationType={'slide'} transparent={true} visible={true}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.centeredView}
        onPress={onBackgroundPress}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={filterAtoZ}>
              <Label
                title={'A-Z'}
                type={'bold'}
                color={stateFilter === 'A-Z' ? colors.red : colors.black}
                fontSize={stateFilter === 'A-Z' ? 18 : 16}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={filterZtoA}>
              <Label
                title={'Z-A'}
                type={'bold'}
                color={stateFilter === 'Z-A' ? colors.red : colors.black}
                fontSize={stateFilter === 'Z-A' ? 18 : 16}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={filterNewest}>
              <Label
                title={'Date Newest'}
                type={'bold'}
                color={stateFilter === 'newest' ? colors.red : colors.black}
                fontSize={stateFilter === 'newest' ? 18 : 16}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={filterOldest}>
              <Label
                title={'Date Oldest'}
                type={'bold'}
                color={stateFilter === 'oldest' ? colors.red : colors.black}
                fontSize={stateFilter === 'oldest' ? 18 : 16}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    width: '60%',
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 10,
  },
});
