import localFont from 'next/font/local'

export const fkGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/FKGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FKGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    // Add other weights as needed
  ],
  variable: '--font-fk-grotesk',
})