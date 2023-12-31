import React from 'react';
import axios from 'axios';
import { Table } from '@web3uikit/core';
import { Reload } from '@web3uikit/icons';

function TransferHistory({ chain, wallet, transfers, setTransfers }) {
  async function getTokenTransfers() {
    const options = {
      method: 'GET',
      url: 'https://api.chainbase.online/v1/account/txs',
      params: {
        chain_id: chain,
        address: wallet,
        page: '1',
        limit: '100',
      },
      headers: {
        accept: 'application/json',
        'x-api-key': '2XAceZuqsW8jhOJlWYhfwb4asBQ',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTransfers(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <div className="tabHeading">
        Transfer History
        <Reload onClick={getTokenTransfers} />
      </div>

      <div>
        {transfers.length > 0 && (
          <Table
            pageSize={8}
            noPagination={false}
            style={{ width: '90vw' }}
            columnsConfig="16vw 18vw 18vw 18vw 16vw"
            data={transfers.map((e) => [
              `${e.from_address.slice(0, 4)}...${e.from_address.slice(38)}`,
              `${e.to_address.slice(0, 4)}...${e.to_address.slice(38)}`,
              e.block_timestamp.slice(0, 10),
              `${e.transaction_hash.slice(0, 4)}...${e.transaction_hash.slice(
                62
              )}`,
              e.block_timestamp.slice(11, 19),
            ])}
            header={[
              <span key="from">From</span>,
              <span key="to">To</span>,
              <span key="date">Date</span>,
              <span key="hash">Hash</span>,
              <span key="time">Time</span>,
            ]}
          />
        )}
      </div>
    </>
  );
}

export default TransferHistory;
