import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

export type BaseViewProps = {
  children?: ReactNode;
  backgroundColor?: string;
};

export const BaseView: React.FC<BaseViewProps> = ({
  backgroundColor,
  children,
}) => {
  // const height = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor}]}
      contentContainerStyle={{flex: 1}}
      behavior={Platform.select({ios: 'height', android: undefined})}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        // android: height + heightPixel(100)
      })}
      enabled={true}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({
      ios: 50,
      android: 10,
    }),
  },
});
