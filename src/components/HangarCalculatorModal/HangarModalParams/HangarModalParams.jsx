import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@radix-ui/themes';
import { hangarParams } from '../../../utils/calculations';
import style from './HangarModalParams.module.css';

export const HangarModalParams = ({ fieldsData }) => {
  const fields = hangarParams(fieldsData);

  return (
    <Flex direction='column' style={{ gap: '5px', padding: '10px 20px' }}>
      {fields.map((field, index) => (
        <Flex key={index + field} justify='between' style={{ position: 'relative' }}>
          <Text>{field.name}:</Text>
          <Text>{field.value}</Text>
          <Box className={style.underline} />
        </Flex>
      ))}
    </Flex>
  );
};

HangarModalParams.propTypes = {
  fieldsData: PropTypes.object,
};
