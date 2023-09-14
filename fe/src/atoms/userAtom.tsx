/* 
  잠시 임시 테스트용.
  로그인 기능 구현 후 수정할 예정
*/

import { atom } from 'jotai';

export const userIdAtom = atom(1); /* 얜 지울꺼에요 */

/* signupTOkenAtom은 수정할수도 */
export const signupTokenAtom = atom(null);

type UserInfo = {
  id: number;
  nickname: string;
  profileImg: string;
} | null;

interface Region {
  id: number;
  name: string;
}

interface UserRegions {
  selectedRegionId: number;
  regions: Region[];
}

export const userInfoAtom = atom<UserInfo>(null);

export const userRegionsAtom = atom<UserRegions>({
  selectedRegionId: 1,
  regions: [
    {
      id: 1,
      name: '역삼1동',
    },
    {
      id: 2,
      name: '두번째',
    },
  ],
});
