import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default Sidebar = ({initial}) => {
  const [sidebarVisible, setSidebarVisible] = useState(initial);

  return(
    <View style={style.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={()=>{setSidebarVisible(!sidebarVisible);}}
      >
        <Text>Sidebar</Text>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
});