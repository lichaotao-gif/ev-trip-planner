import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AppProvider } from '@/context/AppContext';
import { SquareProvider } from '@/context/SquareContext';
import BottomNav from '@/components/BottomNav';

export const metadata = {
  title: 'EV Trip Planner - 电动车旅行规划',
  description: '智能规划你的电车旅行，为补能、风景和停留节奏做好安排',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <AppProvider>
            <SquareProvider>
              <div className="mx-auto max-w-lg pb-20">
                {children}
              </div>
              <BottomNav />
            </SquareProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
