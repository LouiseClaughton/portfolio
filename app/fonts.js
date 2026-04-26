import localFont from 'next/font/local'

export const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
})