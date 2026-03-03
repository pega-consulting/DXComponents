
import { useState } from 'react';
import {
  Avatar,
  Button,
  DateTimeDisplay,
  FieldValueList,
  Flex,
  Modal,
  Table,
  Text,
  withConfiguration
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';

import StyledPegaFieldAdditionalDetailsWrapper from './styles';

// interface for props
interface PegaFieldAdditionalDetailsProps extends PConnFieldProps {
  createLabel: string;
  updateLabel: string;
  resolveLabel: string;
  createOperator: { userId: string; userName: string };
  updateOperator: { userId: string; userName: string };
  resolveOperator: { userId: string; userName: string };
  createDateTime: string;
  updateDateTime: string;
  resolveDateTime: string;
  hideLabel: boolean;
}

interface AuditRow {
  id: string;
  action: string;
  operator: string;
  userId: string;
  dateTime?: string;
}

function PegaFieldAdditionalDetails(props: PegaFieldAdditionalDetailsProps) {
  const {
    createLabel = 'Created',
    updateLabel = 'Updated',
    resolveLabel = 'Resolved',
    createOperator,
    updateOperator,
    resolveOperator,
    createDateTime,
    updateDateTime,
    resolveDateTime
  } = props;

  const [selectedRow, setSelectedRow] = useState<AuditRow | null>(null);

  const allRows: (AuditRow | null)[] = [
    createOperator?.userId
      ? {
          id: 'create',
          action: createLabel,
          operator: createOperator.userName,
          userId: createOperator.userId,
          dateTime: createDateTime
        }
      : null,
    updateOperator?.userId
      ? {
          id: 'update',
          action: updateLabel,
          operator: updateOperator.userName,
          userId: updateOperator.userId,
          dateTime: updateDateTime
        }
      : null,
    resolveOperator?.userId
      ? {
          id: 'resolve',
          action: resolveLabel,
          operator: resolveOperator.userName,
          userId: resolveOperator.userId,
          dateTime: resolveDateTime
        }
      : null
  ];
  const rows: AuditRow[] = allRows.filter((row): row is AuditRow => row !== null);

  const columns = [
    { label: 'Action', renderer: 'action' as keyof AuditRow },
    { label: 'Operator', renderer: 'operator' as keyof AuditRow },
    { label: 'User ID', renderer: 'userId' as keyof AuditRow },
    {
      label: 'Date & Time',
      renderer: ({ dateTime }: AuditRow) =>
        dateTime ? (
          <DateTimeDisplay value={dateTime} variant='datetime' format='long' />
        ) : (
          <span>—</span>
        )
    },
    {
      label: '',
      renderer: (row: AuditRow) => (
        <Button variant='link' compact onClick={() => setSelectedRow(row)}>
          Details
        </Button>
      )
    }
  ];

  return (
    <StyledPegaFieldAdditionalDetailsWrapper>
      <Table<AuditRow>
        title='Audit Details'
        columns={columns}
        data={rows}
        hoverHighlight
      />

      {selectedRow && (
        <Modal
          heading={`${selectedRow.action} — Operator Details`}
          actions={
            <Button variant='secondary' onClick={() => setSelectedRow(null)}>
              Close
            </Button>
          }
          onRequestDismiss={() => setSelectedRow(null)}
        >
          <Flex container={{ direction: 'column', gap: 2 }}>
            <Flex container={{ direction: 'row', alignItems: 'center', gap: 2 }}>
              <Avatar name={selectedRow.operator} size='l' />
              <Text variant='h3'>{selectedRow.operator}</Text>
            </Flex>
            <FieldValueList
              fields={[
                { id: 'action', name: 'Action', value: selectedRow.action },
                { id: 'userId', name: 'User ID', value: selectedRow.userId },
                {
                  id: 'dateTime',
                  name: 'Date & Time',
                  value: selectedRow.dateTime ? (
                    <DateTimeDisplay
                      value={selectedRow.dateTime}
                      variant='datetime'
                      format='long'
                    />
                  ) : (
                    <span>—</span>
                  )
                }
              ]}
            />
          </Flex>
        </Modal>
      )}
    </StyledPegaFieldAdditionalDetailsWrapper>
  );
}

export default withConfiguration(PegaFieldAdditionalDetails);
