import CustomComponent from './CustomComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
