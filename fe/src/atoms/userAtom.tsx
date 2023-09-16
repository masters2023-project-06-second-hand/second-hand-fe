import { atom } from 'jotai';
import { DEFAULT_REGIONS } from '@constants/constants';

type UserInfo = {
  id: number;
  nickname: string;
  profileImg: string;
} | null;

interface Region {
  id: number;
  name: string;
}

export const userInfoAtom = atom<UserInfo>(null);

type UserRegions = {
  currentRegion: string;
  regions: Region[];
  selectedRegionId: number;
};

export const userRegionsAtom = atom<UserRegions>({
  currentRegion: DEFAULT_REGIONS.currentRegion,
  regions: DEFAULT_REGIONS.regions,
  selectedRegionId: DEFAULT_REGIONS.selectedRegionId,
});
