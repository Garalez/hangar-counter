import { Flex } from '@radix-ui/themes';
import { HangarCalculator } from './components/HangarCalculator/HangarCalculator';
import HangarCalculatorModal from './components/HangarCalculatorModal';

const App = () => {
  return (
    <Flex align='center' justify='center' wrap="nowrap" style={{minHeight: '100vh'}}>
      <HangarCalculator />
      <HangarCalculatorModal />
    </Flex>
  );
};

export default App;
