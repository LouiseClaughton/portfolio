import localFont from 'next/font/local'

export const gooper = localFont({
  src: [
    { 
      path: '../public/fonts/Gooper7-Bold.otf', 
      weight: '700', 
      style: 'normal' 
    }
  ],
  variable: '--font-gooper',
});

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-satoshi'
});

export const caveat = localFont({
  src: [
    {
      path: '../public/fonts/Caveat-VariableFont_wght.ttf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-caveat'
});