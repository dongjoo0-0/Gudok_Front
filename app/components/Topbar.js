import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// 이름은 Topbar인데 있는건 메뉴(사이드바)가 다다. 사실 원래는 custom header로 쓰려 했으나 디자인 요소라 생각해서 미뤄둠.
export default Topbar = () => {
  return (
    <FontAwesomeIcon size={32} icon="bars"/>
  );
  /* bars arrow-left */
}