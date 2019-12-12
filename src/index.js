import React, { PureComponent, Component } from 'react';
import { Text, TouchableOpacity, View, PermissionsAndroid, Modal, ScrollView, Image } from 'react-native';

import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles.js' ;
import PendingView from './components/PendingView';
import FocousZone from './components/FocousZone';

export default class App extends PureComponent {

  state = {
    rollCount: 0,
    modalVisibility: false,
    galleryVisivility: false,
    photo: '',
    imagesList: []
  };

  toggleModalVisibility = async () => {
    const { modalVisibility } = this.state;

    if(this.state.rollCount < 1) {
      alert('Tire ao menos uma foto');
      return;
    }

    if(!modalVisibility) {
      try {
        const images = await CameraRoll.getPhotos({
          first: this.state.rollCount,
          assetType: 'Photos'
        });
        this.setState({ modalVisibility: !modalVisibility, imagesList: images.edges });
      } 
      catch (error) {
        alert(error);
      }
    }
    else {
      this.setState({ modalVisibility: !modalVisibility });
    }
  };

  takePicture = async (camera) => {
    try {
      if (this.camera) {
        const { rollCount } = this.state;
        const options = { 
          quality: 0.5, 
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true
        };

        const data = await camera.takePictureAsync(options);

        await CameraRoll.saveToCameraRoll(data.uri);
        
        this.setState({ rollCount: rollCount + 1, galleryVisivility: true, photo: data.uri });  
      }
    }
    catch (error){
      alert(error);
    }
  };

  requestPermissions = () => {
    PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]
    );
  };

  componentDidMount(){
    this.requestPermissions();
  };

  render() {
    const { rollCount } = this.state;
    return (
      <View style={styles.container}>
        <Modal animationType='slide' transparent visible={this.state.modalVisibility} onRequestClose={this.toggleModalVisibility}>
          <View style={styles.modalContainer}>
            <ScrollView horizontal pagingEnabledEnabled>
              { this.state.imagesList.map(image => (
                <Image 
                  key={{ uri: image.node.image.uri }}
                  source={{ uri: image.node.image.uri }}
                  style={styles.modalImage}
                  resizeMode="contain"
                />
              ))}
            </ScrollView>
            <View style={styles.captureContainer}>
              <TouchableOpacity onPress={this.toggleModalVisibility} style={styles.galleryClose}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <RNCamera
          ref={ref => { this.camera = ref; }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
        >         
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            else{
              if(rollCount < 1){
                return (
                  <View style={styles.captureContainer}>
                    <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                      <Icon name='camera' size={60} color='#fff' />
                    </TouchableOpacity>
                  </View>
                );
              }
              else {
                return(
                  <View style={styles.captureContainer}>
                    <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                      <Icon name='camera' size={60} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleModalVisibility} style={styles.gallery} >
                      <Image style={styles.galleryPreview} source={{ uri: this.state.photo }} />
                    </TouchableOpacity>
                  </View>
                );
              }
            }
          }}
        </RNCamera>
        <FocousZone />
      </View>
    );
  }
};
