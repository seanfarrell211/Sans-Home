import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'membership',
    url: '/membership',
  },
  {
    id: 5,
    text: 'idea & inspiration',
    url: '/idea',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Sans Home mission is to provide a better everyday life for people and keeping the mission alive are their everyday employees',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Sans Home vision is to create a better everyday life for the many people.'
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We are the only home furnishings retailer on West Kalimantan list for past three years',
  },
]

export const url1 = 'https://temp-serverless-sans.netlify.app/api/3-z-complete'
export const single_url = 'https://temp-serverless-sans.netlify.app/api/3-z-complete?id='
//export const products_url = 'https://course-api.com/react-store-products'
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const idea_url= 'https://temp-serverless-sans.netlify.app/api/4-z-complete'
export const single_idea_url = 'https://temp-serverless-sans.netlify.app/api/4-z-complete?id='