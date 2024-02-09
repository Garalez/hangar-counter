import { Table } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import { hangarSheetCalculations } from '../../../utils/calculations';

export const HangarModalSheetCalculations = ({fieldsData}) => {
  const sheetCalculations = hangarSheetCalculations(fieldsData);

  return (
    <Table.Root variant='surface' style={{background: 'rebeccapurple'}}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell align='center'>
            Кол-во листа для:
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align='center'>Метраж</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sheetCalculations.map((calculation, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell align='center'>
              {calculation.name}
            </Table.RowHeaderCell>
            <Table.Cell align='center'>{calculation.meterage}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

HangarModalSheetCalculations.propTypes = {
  fieldsData: PropTypes.object,
};
