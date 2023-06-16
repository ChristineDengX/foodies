'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoidmlvbGV0cGVyc25pY2tldHkiLCJhIjoiY2xpdjVhcDdmMWk2OTNkcXZhbG02OWw2OCJ9.ZelXcKUuo03Fr0x6zgCJdA',
  CSV: './Foodfood.csv',
  center: [-75.1652, 39.9726],
  zoom: 12,
  title: 'Food Forest',
  description:
    'Philadelphia is home to one of the largest food deserts in the nation. Food Forest is a not-for-profit application designed for community members to navigate the neighborhoods and find free or affordable foods. Find healthy budget-friendly food no matter where you are in Philadelphia. ',
  sideBarInfo: ['Location_Name', 'Address', 'Phone', 'Food Items Available', 'URL'],
  popupInfo: ['Location_Name'],
  filters: [

    {
      type: 'checkbox',
      title: 'Dietary Health Restriction: ',
      columnHeader: 'Dietary Health Restriction', // Case sensitive - must match spreadsheet entry
      listItems: ['Lactose Intolerant', 'Diabetic Friendly', 'High Blood Pressure Friendly'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Meal Site Type: ',
      columnHeader: 'Meal Site Type',
      listItems: [
        'Food Pantry or Fridge',
        'Grocery Store',
      ],
    },
  ],
};
