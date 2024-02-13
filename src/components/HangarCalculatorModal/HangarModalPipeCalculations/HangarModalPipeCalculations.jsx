import PropTypes from 'prop-types';
import { Table } from '@radix-ui/themes';
import { hangarPipeCalculations } from '../../../utils/calculations';

export const HangarModalPipeCalculations = ({ fieldsData }) => {
  const pipeCalculations = hangarPipeCalculations(fieldsData);

  if (
    !fieldsData.gateCount &&
    pipeCalculations[pipeCalculations.length - 1].name === 'Труба ворота'
  ) {
    pipeCalculations.pop();
  }

  return (
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell align='center'>#</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align='center'>Шт</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align='center'>Метраж</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {pipeCalculations.map((calculation, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell align='center'>{calculation.name}</Table.RowHeaderCell>
            <Table.Cell align='center'>{calculation.count}</Table.Cell>
            <Table.Cell align='center'>{calculation.meterage}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

HangarModalPipeCalculations.propTypes = {
  fieldsData: PropTypes.object,
};
