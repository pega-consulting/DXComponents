import { Button, Modal, useModalManager, withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';

import StyledPegaFieldAdditionalDetailsWrapper from './styles';

// interface for props
interface PegaFieldAdditionalDetailsProps extends PConnFieldProps {
  /** Label shown on the trigger button. */
  buttonLabel: string;
  /** Name of the Pega data page to call (e.g. `D_RowDetails`). */
  dataPage: string;
  /**
   * Comma-separated list of property names from the current page context to pass as
   * data page parameters (e.g. `pyID,pxRefObjectKey`).
   */
  dataPageParams: string;
  /**
   * Optional comma-separated list of property keys to exclude from the modal display
   * (e.g. `pxObjClass`). Applies to both single-record and multi-record responses.
   */
  excludeKeys?: string;
}

// ─── Key-value display for a single record ───────────────────────────────────

const KeyValueDisplay = ({ record }: { record: Record<string, any> }) => (
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <tbody>
      {Object.entries(record).map(([key, value]) => (
        <tr key={key}>
          <td
            style={{
              padding: '10px 14px',
              fontWeight: 600,
              textTransform: 'capitalize',
              borderBottom: '0.5px solid rgb(207,207,207)',
              whiteSpace: 'nowrap',
              width: '40%'
            }}
          >
            {key.replace(/_/g, ' ')}
          </td>
          <td
            style={{
              padding: '10px 14px',
              borderBottom: '0.5px solid rgb(207,207,207)'
            }}
          >
            {String(value ?? '—')}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ─── Table display for multiple records ──────────────────────────────────────

const RecordTable = ({ records }: { records: Record<string, any>[] }) => {
  const rawKeys = Object.keys(records[0] || {});
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', border: '0.5px solid rgb(207,207,207)' }}>
      <thead>
        <tr>
          {rawKeys.map(key => (
            <th
              key={key}
              style={{
                backgroundColor: 'rgb(245,245,245)',
                padding: '10px',
                textAlign: 'left',
                textTransform: 'capitalize',
                borderBottom: '0.5px solid rgb(207,207,207)'
              }}
            >
              {key.replace(/_/g, ' ')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((row, i) => (
          <tr key={i}>
            {rawKeys.map(key => (
              <td
                key={key}
                style={{ borderBottom: '0.5px solid rgb(207,207,207)', padding: '14px 10px' }}
              >
                {String(row[key] ?? '—')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ─── Modal content ────────────────────────────────────────────────────────────

const DetailsModal = ({ data }: { data: Record<string, any>[] | string }) => {
  if (typeof data === 'string') {
    return (
      <Modal heading='Additional Details' autoWidth>
        <p style={{ padding: '1rem' }}>{data}</p>
      </Modal>
    );
  }

  return (
    <Modal
      heading='Additional Details'
      autoWidth
      style={{ minWidth: '600px', maxWidth: '1200px' } as React.CSSProperties}
    >
      {data.length === 1 ? (
        <KeyValueDisplay record={data[0]} />
      ) : (
        <RecordTable records={data} />
      )}
    </Modal>
  );
};

// ─── Helper: strip excluded keys from every record ───────────────────────────

function stripKeys(records: Record<string, any>[], excluded: string[]): Record<string, any>[] {
  if (!excluded.length) return records;
  return records.map(row => {
    const cleaned = { ...row };
    excluded.forEach(k => delete cleaned[k]);
    return cleaned;
  });
}

// ─── Helper: build data page params from current page context ─────────────────

async function fetchDataPageResults(
  pConn: any,
  dataPage: string,
  dataPageParams: string
): Promise<Record<string, any>[] | string> {
  const currentContext: Record<string, any> = pConn.getValue(pConn.getPageReference()) ?? {};
  const paramKeys = dataPageParams.split(',').map(k => k.trim()).filter(Boolean);

  const params = paramKeys.reduce<Record<string, any>>((acc, key) => {
    if (key in currentContext) acc[key] = currentContext[key];
    return acc;
  }, {});

  const context = pConn.getContextName();
  const PCore = (window as any).PCore;

  try {
    const result = await PCore.getDataPageUtils().getDataAsync(dataPage, context, params);
    if (result?.data?.length) return result.data;
    return 'No data found.';
  } catch (err) {
    console.error('AdditionalDetails: data page fetch failed —', err);
    return 'Unable to load details.';
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

function PegaFieldAdditionalDetails(props: PegaFieldAdditionalDetailsProps) {
  const {
    getPConnect,
    buttonLabel = 'Additional Details',
    dataPage = '',
    dataPageParams = '',
    excludeKeys = 'pxObjClass'
  } = props;

  const { create } = useModalManager();
  const pConn = getPConnect();

  const excluded = excludeKeys.split(',').map(k => k.trim()).filter(Boolean);

  async function handleClick() {
    const raw = await fetchDataPageResults(pConn, dataPage, dataPageParams);
    const data = typeof raw === 'string' ? raw : stripKeys(raw, excluded);
    create(DetailsModal, { data });
  }

  return (
    <StyledPegaFieldAdditionalDetailsWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </StyledPegaFieldAdditionalDetailsWrapper>
  );
}

export default withConfiguration(PegaFieldAdditionalDetails);
