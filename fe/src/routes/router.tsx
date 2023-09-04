import { AccountPage } from '@pages/AccountPage';
import { ChatPage } from '@pages/ChatPage';
import { HistoryPage } from '@pages/HistoryPage';
import { HomePage } from '@pages/HomePage';
import { Layout } from '@pages/Layout';
import { LikePage } from '@pages/LikePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    // 레이아웃 페이지 추가(네비게이션바, 공통 스타일)
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/like',
        element: <LikePage />,
      },
      {
        path: '/chat',
        element: <ChatPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
    ],
  },
]);

export default router;
