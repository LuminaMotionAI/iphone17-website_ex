import '@mantine/core/styles.css';
import './globals.css';
import { MantineProvider, ColorSchemeScript, createTheme, mantineHtmlProps } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
    fontWeight: '600',
  },
  colors: {
    dark: [
      '#f5f5f7',
      '#d2d2d7',
      '#86868b',
      '#6e6e73',
      '#424245',
      '#2d2d2d',
      '#1d1d1f',
      '#151516',
      '#0a0a0a',
      '#000000',
    ],
  },
  defaultRadius: 'lg',
});

export const metadata = {
  title: 'iPhone 17 | Apple',
  description: 'iPhone 17. 완전히 새로운 세계.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

