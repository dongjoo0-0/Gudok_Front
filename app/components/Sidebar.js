import React, {useState} from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

// 만들어 놓고 아무데서도 쓰고 있지 않음. . . . 사이드바(구독)모델보다 타 요소가 우선적으로 개발되어야 해서 버려두었다.
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