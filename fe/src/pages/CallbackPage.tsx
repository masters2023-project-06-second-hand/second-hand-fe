// import axios from 'axios';
import axios from 'axios';
import { useEffect } from 'react';

export const CallbackPage = () => {
  // 백엔드와 테스트중
  useEffect(() => {
    const URL = window.location.href;
    const parts = URL.split('?');
    const queryString = parts[1];

    async function fetchData() {
      try {
        const response = await axios.get(
          `http://ec2-15-164-155-230.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/google?${queryString}`
        );
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error('데이터를 가져오는 동안 오류가 발생했습니다:', error);
      }
    }

    fetchData();
  }, []);
  return <></>;
};
