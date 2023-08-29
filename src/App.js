import './App.css';
import Counter from './components/Counter';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Counter></Counter>
    </ChakraProvider>

  );
}

export default App;
