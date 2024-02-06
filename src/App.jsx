import { Flex } from '@radix-ui/themes';
import { HangarCalculator } from './components/HangarCalculator/HangarCalculator';
import { FieldsDataProvider } from './contexts/FieldsDataContext';
import HangarCalculatorModal from './components/HangarCalculatorModal';

const App = () => {
  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      style={{ height: '100vh' }}>
      <FieldsDataProvider>
        <HangarCalculator />
        <HangarCalculatorModal />
      </FieldsDataProvider>
    </Flex>
  );
};

export default App;
