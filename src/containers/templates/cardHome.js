import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Label from '../../components/atoms/label';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import floor_plan from '../../../assets/icons/floor_plan.png';
import colors from '../../utils/colors';

const CardHome = ({
  onPress,
  image,
  title,
  address,
  sketch,
  bedRoom,
  bathRoom,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri:
                image !== undefined
                  ? image
                  : 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
            }}
            width={'100%'}
            height={200}
          />
        </View>
        <View style={styles.wrapperTxt}>
          <Label
            title={title !== undefined ? title : '-'}
            type={'bold'}
            fontSize={25}
            color={colors.black}
          />
          <Label
            title={address === '' ? 'Alamat Kosong' : address}
            type={'medium'}
            fontSize={16}
            color={colors.black}
          />
          <View style={styles.desc}>
            <View style={styles.itemDesc}>
              <Image source={floor_plan} style={styles.tinyLogo} />
              <Label
                title={sketch !== undefined ? `${sketch}m2` : '-'}
                type={'medium'}
                fontSize={20}
                color={colors.black}
              />
            </View>
            <View style={styles.itemDesc}>
              <Ionicons name={'bed-outline'} size={30} color={colors.red} />
              <Label
                title={bedRoom !== undefined ? `${bedRoom}` : '-'}
                type={'medium'}
                fontSize={20}
                color={colors.black}
              />
            </View>
            <View style={styles.itemDesc}>
              <MaterialCommunityIcons
                name={'shower'}
                size={27}
                color={colors.red}
                style={{transform: [{scaleX: -1}]}}
              />
              <Label
                title={bathRoom !== undefined ? `${bathRoom}` : '-'}
                type={'medium'}
                fontSize={20}
                color={colors.black}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 12,
  },
  tinyLogo: {
    width: 26,
    height: 26,
    marginRight: 4,
  },
  wrapperTxt: {
    marginTop: -20,
    elevation: 2,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 23,
    paddingTop: 10,
    paddingBottom: 23,
  },
  img: {
    backgroundColor: colors.grey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  itemDesc: {
    flexDirection: 'row',
    marginRight: 10,
  },
});
