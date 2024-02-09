import PropTypes from 'prop-types';
import { Flex, Text } from '@radix-ui/themes';
import { hangarParams } from '../../../utils/calculations';

export const HangarModalParams = ({ fieldsData }) => {
  const fields = hangarParams(fieldsData);

  return (
    <Flex direction='column' style={{ gap: '10px', paddingTop: '10px 30px' }}>
      {fields.map((field, index) => (
        <Flex key={index + field} justify='between'>
          <Text>{field.name}:</Text>
          <Text>{field.value}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

HangarModalParams.propTypes = {
  fieldsData: PropTypes.object,
};
