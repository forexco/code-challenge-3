import { Container } from "@mui/material";
import { TransactionsTable } from "../components/TransactionsTable/TransactionsTable";

export const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <Container
        maxWidth={false}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <TransactionsTable />
      </Container>
    </div>
  );
};
