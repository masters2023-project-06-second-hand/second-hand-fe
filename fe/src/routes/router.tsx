import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import { HomePage } from '@pages/HomePage';
import { CategoryPage } from '@pages/CategoryPage';
import { HistoryPage } from '@pages/HistoryPage';
import { LikePage } from '@pages/LikePage';
import { ChatPage } from '@pages/ChatPage';
import { AccountPage } from '@pages/AccountPage';
import { ErrorPage } from '@pages/ErrorPage';
import { DetailPage } from '@pages/DetailPage';
import { JoinPage } from '@pages/JoinPage';
import { AddPage } from '@pages/AddPage';
import { CallbackPage } from '@pages/CallbackPage';
import { PATH } from '@constants/path';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: PATH.CATEGORY,
            element: <CategoryPage />,
          },
          {
            path: PATH.HISTORY,
            element: <HistoryPage />,
          },
          {
            path: PATH.LIKED,
            element: <LikePage />,
          },
          {
            path: PATH.CHAT,
            element: <ChatPage />,
          },
          {
            path: PATH.ACCOUNT,
            element: <AccountPage />,
          },
          {
            path: PATH.DETAIL,
            element: <DetailPage />,
          },
          {
            path: PATH.ADD,
            element: <AddPage />,
          },
          {
            path: PATH.JOIN,
            element: <JoinPage />,
          },
          {
            path: PATH.CALLBACK,
            element: <CallbackPage />,
          },
          {
            path: PATH.FALLBACK,
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
