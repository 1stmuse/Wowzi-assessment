/* eslint-disable react/react-in-jsx-scope */
import {ICharacter} from '../../services/interfaces';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {fontPixel, heightPixel} from '../../utility/pxToDpConvert';
import colors from '../../utility/colors';

interface IProps {
  data: Partial<ICharacter>;
  grid: boolean;
  onPress?: () => void;
}

export const CharacterCard = ({data, grid, onPress}: IProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress && onPress!();
      }}
      style={[
        styles.card,
        grid ? styles.HorizontalContainer : styles.VerticalContainer,
      ]}>
      <View style={[styles.image, {width: grid ? '100%' : '50%'}]}>
        <Image
          source={{uri: data?.image}}
          style={{height: '100%', width: '100%'}}
          resizeMode="cover"
          resizeMethod="scale"
        />
      </View>
      <View style={[styles.infoBody, {flex: grid ? 0 : 1}]}>
        <View>
          <Text style={styles.info}>Species: {data.name}</Text>
          <Text style={styles.info}>Location: {data.location?.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: heightPixel(100),
    maxHeight: heightPixel(350),
    marginBottom: heightPixel(30),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  VerticalContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  HorizontalContainer: {
    width: '45%',
    marginHorizontal: 10,
  },
  image: {
    height: 150,
    overflow: 'hidden',
  },
  infoBody: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  info: {
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),
    color: colors.secondary,
  },
});
