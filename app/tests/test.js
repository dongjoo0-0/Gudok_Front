import { describe, it } from 'jest-circus';
import React, {useContext} from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SplashScreen, { isAuthenticated } from '../screens/SplashScreen';
import { AuthProvider } from '../contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


/* 
사용자 시나리오

앱 열었을 때
처음 사용하는 사용자는 로그인 화면을 본다
given: 저장된 정보가 없다면 
when: 앱을 열었을 때
then: 로그인 화면으로 이동한다
LocalStorage에 jwt 토큰이 저장되어 있으면 사용자는 바로 홈 화면으로 넘어간다
given: 저장된 정보가 있다면
when: 앱을 열었을 때
then: 로그인 화면으로 이동한다

로그인 화면에서
사용자는 아이디와 비밀번호를 입력한다
사용자는 로그인 버튼을 눌러 홈 화면으로 넘어간다
처음 사용하는 사용자는 회원가입 화면으로 넘어간다

회원가입 화면에서
사용자는 아이디 중복 확인을 한다
사용자는 비밀번호를 입력하고 회원가입을 완료한다
회원가입이 완료된 사용자는 로그인 화면으로 넘어간다 (or 홈 화면으로 넘어간다)

홈 화면에서
처음 사용하는 사용자는 도움말이 나타난다
사용자가 구독한 사이트의 글들이 나타난다
사용자는 검색/구독 수정/예약어 수정/글 확인/개인정보 수정의 액션을 할 수 있다.
to be continue...
*/

describe("Open App", () => {
  describe("No data stored", () => {
    it("Render Login Screen", async () => {

      jest.mock('../screens/SplashScreen', () => {
        isAuthenticated: () => {{user: {_id: "asdf"}}}
      });

      const { getByText } = render(
        <NavigationContainer>
          <AuthProvider>
            <SplashScreen/>
          </AuthProvider>
        </NavigationContainer>
      );

      await waitFor(() => getByText('Login'));
    });
  });
  /*
  describe("There is stored data", () => {
    it("Render Home Screen", async () => {

      jest.spyOn(React, 'useContext').mockImplementationOnce(()=> [{ user: {_id: "",} }, jest.fn()]);

      const { getByText } = render(<SplashScreen/>);

      await waitFor(() => getByText('Home'))
    });
  });*/
  describe("Try Login", () => {
    it("Login Success", async () => {

      jest.mock('../screens/LogInScreen', () => {
        handleSubmit: () => {AsyncStorage.setItem('user', {
          email: "adsf@asdf.asdf",
          search_list : ['asdf','asdf'],
          subscribe_list : ['asdf','asdf']
        })}
      });

      const { getByText } = render(
        <NavigationContainer>
          <AuthProvider>
            <LogInScreen/>
          </AuthProvider>
        </NavigationContainer>
      );

      //클릭하는 액션 넣어야 되는데;;

      await waitFor(() => getByText('Home'))
    })
  })
});