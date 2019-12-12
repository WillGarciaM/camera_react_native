import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)'
  },

  gallery: {
    flex: 0,
    marginLeft: 40,
    borderRadius: 5,
    alignSelf: 'center'
  },

  galleryPreview: {
    opacity: 1.0,
    width: 60,
    height: 60,
    resizeMode:'stretch'
  },

  galleryClose: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'white',
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginLeft: 10,
    margin: 20
  },

  modalImage: {
    width: Dimensions.get('window').width * 0.8,
    marginHorizontal: Dimensions.get('window').width * 0.2
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  captureContainer: {
    flex: 0, 
    flexDirection: 'row',
    justifyContent: 'center', 
    backgroundColor: 'black',
    width: '100%', 
    opacity: 0.7
  },

  capture: {
    flex: 0,
    alignSelf: 'center',
    margin: 20,
  },
});

export default styles;
