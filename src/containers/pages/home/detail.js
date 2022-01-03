import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Label from '../../../components/atoms/label';
import colors from '../../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import moneyFormat from '../../../utils/moneyFormat';
import floor_plan from '../../../../assets/icons/floor_plan.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

const DetailOptionPage = ({route}) => {
  const {
    name,
    image,
    address,
    price,
    sketch,
    bedRoom,
    bathRoom,
    wideLand,
    wideBuiding,
    type,
  } = route.params;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dimension = useWindowDimensions();
  return (
    <View
      style={[
        styles.safeArea,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginTop: -3, marginRight: 12}}
            onPress={() => navigation.goBack()}>
            <Ionicons name={'chevron-back'} size={20} color={colors.black} />
          </TouchableOpacity>
          <Label
            title={name}
            fontSize={17}
            type={'bold'}
            color={colors.black}
          />
        </View>
        <Image
          style={styles.img}
          source={{
            uri:
              image !== undefined
                ? image
                : 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
          }}
          width={'100%'}
          height={dimension.height / 3}
        />
        <View style={styles.detailDesc}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.bottomLine}>
              <Label
                title={name !== undefined ? name : '-'}
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
            </View>
            <View style={[styles.bottomLine, {paddingTop: 12}]}>
              <Label
                title={'Price'}
                type={'bold'}
                fontSize={20}
                color={colors.black}
              />
              <Label
                title={`${moneyFormat(price)}`}
                type={'bold'}
                fontSize={35}
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
            <View style={[styles.bottomLine, {paddingTop: 12}]}>
              <Label
                title={'Details'}
                type={'bold'}
                fontSize={20}
                color={colors.black}
              />
              <View style={styles.type}>
                <Label
                  title={'Type'}
                  type={'bold'}
                  fontSize={16}
                  color={colors.black}
                />
                <Label
                  title={type !== undefined ? `${type}` : '-'}
                  type={'medium'}
                  fontSize={14}
                  color={colors.black}
                />
              </View>
              <View style={styles.type}>
                <Label
                  title={'Luas Bangunan'}
                  type={'bold'}
                  fontSize={16}
                  color={colors.black}
                />
                <Label
                  title={wideBuiding !== undefined ? `${wideBuiding} m2` : '-'}
                  type={'medium'}
                  fontSize={14}
                  color={colors.black}
                />
              </View>
              <View style={styles.type}>
                <Label
                  title={'Luas Tanah'}
                  type={'bold'}
                  fontSize={16}
                  color={colors.black}
                />
                <Label
                  title={wideLand !== undefined ? `${wideLand} m2` : '-'}
                  type={'medium'}
                  fontSize={14}
                  color={colors.black}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailOptionPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: colors.grey1,
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  img: {
    backgroundColor: colors.grey,
    flexShrink: 1,
  },
  detailDesc: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop: 38,
    paddingHorizontal: 25,
  },
  bottomLine: {
    borderBottomWidth: 0.9,
    borderBottomColor: colors.grey2,
    paddingBottom: 30,
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  tinyLogo: {
    width: 26,
    height: 26,
    marginRight: 4,
  },
  itemDesc: {
    flexDirection: 'row',
    marginRight: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  type: {
    marginVertical: 10,
  },
});
