import React from 'react';

import Home from './Home/Home';
import Meeting from './Meeting/Meeting';
import Conferences from './Conference/Conferences';
import Resources from './Resource/Resources';
import Contact from './Contact/Contact';

export interface IRoute {
  path: string;
  sidebarName: string;
  component: React.ComponentType;
}

const Routes: IRoute[] = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/meeting',
    sidebarName: 'Meeting',
    component: Meeting
  },
  {
    path: '/conference',
    sidebarName: 'Conference',
    component: Conferences
  },
  {
    path: '/resource',
    sidebarName: 'Resources',
    component: Resources
  },
  {
    path: '/contact',
    sidebarName: 'Contact Us',
    component: Contact
  }
];

export default Routes;