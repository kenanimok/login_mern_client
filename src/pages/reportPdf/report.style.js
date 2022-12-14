import styled from "styled-components";
export const Container = styled.div`
  .print:last-child {
    page-break-after: auto;
  }

  .new-page {
    height: 1065px;
    page-break-before: always;
    padding-top: "8pt";
  }

  @media print {
    @page {
      size: landscape !important;
    }
    @page {
      size: auto !important;
      margin: 1mm !important;
    }
    .page-break {
      margin-top: 1rem !important;
      page-break-before: auto !important;
    }
  }
`;
export const Box = styled.div`
  margin: 20px;
  width: 800px;
  padding-bottom: 40px;
  font-size: 10px !important;
  font-weight: 700 !important;
`;
