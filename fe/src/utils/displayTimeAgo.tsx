export default function displayTimeAgo(createdAt: string): string {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const diffInSeconds = Math.floor(
    (currentTime.getTime() - createdTime.getTime()) / 1000
  );

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diffInSeconds < minute) return `${diffInSeconds}초 전`;
  if (diffInSeconds < hour) return `${Math.floor(diffInSeconds / minute)}분 전`;
  if (diffInSeconds < day) return `${Math.floor(diffInSeconds / hour)}시간 전`;
  if (diffInSeconds < week) return `${Math.floor(diffInSeconds / day)}일 전`;
  if (diffInSeconds < month) return `${Math.floor(diffInSeconds / week)}주 전`;
  if (diffInSeconds < year) return `${Math.floor(diffInSeconds / month)}달 전`;

  return `${Math.floor(diffInSeconds / year)}년 전`;
}
