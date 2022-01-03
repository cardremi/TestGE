import React, {memo} from 'react';
import {Text} from 'react-native';

const fonts = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  italic: 'Poppins-Italic',
  medium: 'Poppins-Medium',
  bold: 'Poppins-SemiBold',
};

const Label = ({title, fontSize, color, type, align}) => {
  return (
    <Text
      style={{
        fontSize: fontSize,
        color: color,
        fontFamily: type !== undefined ? fonts[type] : fonts.regular,
        textAlign: align,
      }}>
      {title}
    </Text>
  );
};

export default Label;
