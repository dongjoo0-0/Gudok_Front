import React, { useState, createContext } from 'react';

// 여러 컴포넌트에서 Auth 정보를 사용하기 위해 Context를 생성한다.
export const AuthContext = createContext();

// Context를 제공하는 Provider를 export한다. useState를 통해 얻은 authState, setAuthState를 children에서 사용할 수 있게 된다.
export const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    _id: '',
    email: '',
    searchList: [],
    subList: [],
  });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {props.children}
    </AuthContext.Provider>
  );

};