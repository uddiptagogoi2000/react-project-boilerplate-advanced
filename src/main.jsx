import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'tasks/id/:taskId',
        element: (
          <div>
            Hello Id taskId
            <Outlet />
          </div>
        ),
        children: [
          {
            path: 'details',
            element: <div>Hello Id taskId details</div>,
          },
        ],
      },
      {
        path: 'tasks/:tasklistId',
        element: <div>hello tasks for my day</div>,
      },
      {
        path: '/',
        element: <Navigate to='/tasks/myday' />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
