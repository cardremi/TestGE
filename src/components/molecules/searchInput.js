import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import mi_filter from '../../../assets/icons/mi_filter.png';
const SearchInput = props => {
  return (
    <View style={styles.container}>
      <FontAwesome name={'search'} size={20} color={colors.black} />
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          keyboardType={props.keyboardType}
          editable={props.editable}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={colors.black}
          autoCorrect={false}
          autoCapitalize="none"
          ref={props.inputRef}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKey}
          blurOnSubmit={props.blurOnSubmit}
        />
      </View>
      <TouchableOpacity onPress={props.settingPress}>
        <Image source={mi_filter} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 5,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  input: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.black,
  },
  wrapperInput: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5,
    marginRight: 10,
    borderRightWidth: 2,
    borderRightColor: colors.grey,
  },
});

export default SearchInput;
