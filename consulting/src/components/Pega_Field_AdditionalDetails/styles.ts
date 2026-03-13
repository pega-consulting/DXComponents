import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.5rem 0;

    table {
      width: 100%;
      border-collapse: collapse;
    }
  `;
});
