import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  previewFocousZone: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').width * 0.5
  },

  previewFocousZoneRowBlock: {
    flexDirection: 'row'
  },

  previewFocousZone1: {
    paddingHorizontal: 25,
    paddingVertical: 20,

    borderTopWidth: 14,
    borderLeftWidth: 14,

    borderStyle: 'solid',
    borderColor: 'white',
    alignItems: 'center'
  },

  previewFocousZone2: {
    paddingHorizontal: 25,
    paddingVertical: 20,

    marginLeft: 100,

    borderTopWidth: 14,
    borderRightWidth: 14,

    borderStyle: 'solid',
    borderColor: 'white',
    alignItems: 'center'
  },

  previewFocousZone3: {
    paddingHorizontal: 25,
    paddingVertical: 20,

    marginTop: 80,

    borderBottomWidth: 14,
    borderLeftWidth: 14,

    borderStyle: 'solid',
    borderColor: 'white',
    alignItems: 'center'
  },

  previewFocousZone4: {
    paddingHorizontal: 25,
    paddingVertical: 20,

    marginLeft: 100,
    marginTop: 80,

    borderBottomWidth: 14,
    borderRightWidth: 14,

    borderStyle: 'solid',
    borderColor: 'white',
    alignItems: 'center'
  }
});

export default styles;
