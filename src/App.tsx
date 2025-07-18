import { useEffect } from 'react';
import ChatPage from './pages/ChatPage';
import { useTheme } from './store/theme';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <ChatPage />;
}

export default App;
