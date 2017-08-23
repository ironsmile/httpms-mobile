import { Platform } from 'react-native';

const fontFamily = 'Verdana';

export const gs = {

  bg: {
    backgroundColor: '#181818',
  },

  font: {
    color: 'white',
  },

  bolder: {
    fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
  },

};

export const hs = {

  bg: {
    backgroundColor: 'rgba(27,27,27,.9)',
    position: 'absolute',
    height: 50,
    paddingTop: 14,
    top: 0,
    left: 0,
    right: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: null,
    elevation: 0,
  },

  font: {
    ...gs.font,
    fontWeight: 'normal',
  },

};
