import { useContext } from 'react';
import * as style from './HangarCalculatorModal.module.css';
import { Root, Overlay, Content, Close, Title } from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import HangarModalPipeCalculations from './HangarModalPipeCalculations';
import HangarModalSheetCalculations from './HangarModalSheetCalculations';
import HangarModalParams from './HangarModalParams';
import { FieldsDataContext } from '../../contexts/FieldsDataContext';

export const HangarCalculatorModal = () => {
  const { fieldsData, setFieldsData } = useContext(FieldsDataContext);

  const handleOpenChange = () => {
    setFieldsData({
      ...fieldsData,
      isModalOpen: false,
    });
  };

  return (
    <Root open={fieldsData.isModalOpen} onOpenChange={handleOpenChange}>
      <Overlay className={style.DialogOverlay} />
      <Content className={style.DialogContent}>
        <Title className={style.DialogTitle}>Расчёты:</Title>
        <Tabs.Root className={style.TabsRoot} defaultValue='tab1'>
          <Tabs.List className={style.TabsList} aria-label='Manage your account'>
            <Tabs.Trigger className={style.TabsTrigger} value='tab1'>
              Труба
            </Tabs.Trigger>
            <Tabs.Trigger className={style.TabsTrigger} value='tab2'>
              Лист
            </Tabs.Trigger>
          </Tabs.List>
          <HangarModalParams fieldsData={fieldsData} />
          <Tabs.Content className={style.TabsContent} value='tab1'>
            <HangarModalPipeCalculations fieldsData={fieldsData} />
          </Tabs.Content>
          <Tabs.Content className={style.TabsContent} value='tab2'>
            <HangarModalSheetCalculations fieldsData={fieldsData} />
          </Tabs.Content>
        </Tabs.Root>
      </Content>
    </Root>
  );
};
