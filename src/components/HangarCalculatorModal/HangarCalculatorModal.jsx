import { useContext, useState } from 'react';
import * as style from './HangarCalculatorModal.module.css';
import {
  Root,
  Trigger,
  Overlay,
  Content,
  Close,
  Portal,
  Title,
} from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import HangarModalPipeCalculations from './HangarModalPipeCalculations';
import HangarModalSheetCalculations from './HangarModalSheetCalculations';
import HangarModalParams from './HangarModalParams';
import { FieldsDataContext } from '../../contexts/FieldsDataContext';
// import { useTransition, animated, config } from 'react-spring';

export const HangarCalculatorModal = () => {
  const { fieldsData } = useContext(FieldsDataContext);
  const [open, setOpen] = useState(false);
  // const transitions = useTransition(open, {
  //   from: { opacity: 0, y: -10 },
  //   enter: { opacity: 1, y: 0 },
  //   leave: { opacity: 0, y: 10 },
  //   config: config.stiff,
  // });

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger>Open</Trigger>
      {/* {transitions((styles, item) =>
        item ? ( */}
      <Portal>
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
            <HangarModalParams fieldsData={fieldsData}/>
            <Tabs.Content className={style.TabsContent} value='tab1'>
              <HangarModalPipeCalculations fieldsData={fieldsData}/>
            </Tabs.Content>
            <Tabs.Content className={style.TabsContent} value='tab2'>
              <HangarModalSheetCalculations fieldsData={fieldsData}/>
            </Tabs.Content>
          </Tabs.Root>

          {/* <Description className={style.DialogDescription}>
            Make changes to your profile here. Click save when you&apos;re done.
          </Description>
          <fieldset className={style.Fieldset}>
            <label className={style.Label} htmlFor='name'>
              Name
            </label>
            <input
              className={style.Input}
              id='name'
              defaultValue='Pedro Duarte'
            />
          </fieldset>
          <fieldset className={style.Fieldset}>
            <label className={style.Label} htmlFor='username'>
              Username
            </label>
            <input
              className={style.Input}
              id='username'
              defaultValue='@peduarte'
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}>
            <Close asChild>
              <button className={`${style.Button} ${style.green}`}>
                Save changes
              </button>
            </Close>
          </div>
          <Close asChild>
            <button className={style.IconButton} aria-label='Close'></button>
          </Close> */}
        </Content>
      </Portal>
      {/* ) : null
      )} */}
    </Root>
  );
};
