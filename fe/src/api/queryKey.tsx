export const QUERY_KEYS = {
  CATEGORIES: (includeImages?: boolean) => [`categories`, { includeImages }],

  USER_REGIONS: (memberId: number | null) => [`userRegions`, memberId],
};
