/* eslint-disable react/react-in-jsx-scope */
import {ReactElement} from 'react';
import {
  Text,
  TextInputProps,
  View,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import colors from '../../utility/colors';
import {heightPixel, widthPixel} from '../../utility/pxToDpConvert';

interface IProps extends TextInputProps {
  label?: string;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
}

export const AppTextInput = ({
  label,
  rightIcon,
  leftIcon,
  ...props
}: IProps) => {
  return (
    <View style={styles.body}>
      {label && (
        <View>
          <Text>
            <label htmlFor="" />
          </Text>
        </View>
      )}
      <View style={styles.inputContaner}>
        {leftIcon && leftIcon}
        <TextInput style={[styles.input]} {...props} />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
  },
  inputContaner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    paddingHorizontal: widthPixel(5),
    paddingVertical: Platform.select({
      ios: heightPixel(10),
      android: 0,
    }),
  },
  input: {
    paddingHorizontal: widthPixel(15),
    flex: 1,
  },
});
