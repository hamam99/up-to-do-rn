import {Colors} from '../utils';

import icGrocery from '../assets/icons/category-bread.png';
import icWork from '../assets/icons/category-work.png';
import icSport from '../assets/icons/category-sport.png';

import icDesign from '../assets/icons/category-design.png';
import icUniversity from '../assets/icons/category-university.png';
import icSocial from '../assets/icons/category-social.png';

import icMusic from '../assets/icons/category-music.png';
import icHealth from '../assets/icons/category-health.png';
import icMovie from '../assets/icons/category-movie.png';
import icHome from '../assets/icons/category-home.png';

const listCategory = [
  {
    name: 'grocery',
    color: Colors.green1,
    icon: icGrocery,
    label: 'Grocery',
  },
  {
    name: 'work',
    color: Colors.orange1,
    icon: icWork,
    label: 'Work',
  },
  {
    name: 'sport',
    color: Colors.cyan1,
    icon: icSport,
    label: 'Sport',
  },
  {
    name: 'design',
    color: Colors.cyan1,
    icon: icDesign,
    label: 'Design',
  },
  {
    name: 'university',
    color: Colors.purple3,
    icon: icUniversity,
    label: 'University',
  },
  {
    name: 'social',
    color: Colors.pink1,
    icon: icSocial,
    label: 'Social',
  },

  {
    name: 'Music',
    color: Colors.purple3,
    icon: icMusic,
    label: 'Music',
  },
  {
    name: 'health',
    color: Colors.green2,
    icon: icHealth,
    label: 'Health',
  },
  {
    name: 'movie',
    color: Colors.blue1,
    icon: icMovie,
    label: 'Movie',
  },
  {
    name: 'home',
    color: Colors.red1,
    icon: icHome,
    label: 'Home',
  },
];

const CategoryData = {listCategory};

export default CategoryData;
