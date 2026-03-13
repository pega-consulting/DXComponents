
/** Props used in Storybook stories. */
export const configProps = {
  buttonLabel: 'View Details',
  dataPage: 'D_RowDetails',
  dataPageParams: 'pyID,pxRefObjectKey',
  excludeKeys: 'pxObjClass'
};

/**
 * A mock single-record response returned by the data page.
 * Used in stories and tests to simulate the fetch.
 */
export const singleRecordResponse = {
  data: [
    {
      pyID: 'C-123',
      pxRefObjectKey: 'CASE C-123',
      Status: 'Open',
      Owner: 'admin@mediaco',
      Created: '2023-01-16T14:53:33.198Z',
      Updated: '2023-01-16T14:53:33.280Z'
    }
  ]
};

/**
 * A mock multi-record response returned by the data page.
 * Used in stories that demonstrate the table view.
 */
export const multiRecordResponse = {
  data: [
    {
      pyID: 'C-123',
      Status: 'Open',
      Owner: 'admin@mediaco',
      Priority: 'High'
    },
    {
      pyID: 'C-124',
      Status: 'Pending',
      Owner: 'manager@mediaco',
      Priority: 'Medium'
    },
    {
      pyID: 'C-125',
      Status: 'Resolved',
      Owner: 'support@mediaco',
      Priority: 'Low'
    }
  ]
};
