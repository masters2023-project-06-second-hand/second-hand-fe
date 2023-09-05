import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@pages/Layout';
import { HomePage } from '@pages/HomePage';
import { CategoryPage } from '@pages/CategoryPage';
import { HistoryPage } from '@pages/HistoryPage';
import { LikePage } from '@pages/LikePage';
import { ChatPage } from '@pages/ChatPage';
import { AccountPage } from '@pages/AccountPage';
import { ErrorPage } from '@pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            // path: '',
            index: true,
            element: <HomePage />,
          },
          {
            path: '/category',
            element: <CategoryPage />,
          },
          {
            path: '/history',
            element: <HistoryPage />,
          },
          {
            path: '/liked',
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
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
