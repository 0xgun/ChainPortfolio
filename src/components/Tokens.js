import React from 'react';
import axios from 'axios';
import { Table } from '@web3uikit/core';
import { Reload } from '@web3uikit/icons';

function Tokens({ wallet, chain, tokens, setTokens }) {
  async function getNativeTokens() {
    const options = {
      method: 'GET',
      url: 'https://api.chainbase.online/v1/account/tokens',
      params: {
        chain_id: chain,
        address: wallet,
        limit: '20',
        page: '1',
      },
      headers: { accept: 'application/json', 'x-api-key': 'demo' },
    };

    axios
      .request(options)
      .then(function (response) {
        setTokens(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <div className="tabHeading">
        ERC20 Tokens
        <Reload onClick={getNativeTokens} />
      </div>

      {tokens.length > 0 && (
        <Table
          pageSize={6}
          noPagination={true}
          style={{ width: '900px' }}
          columnsConfig="300px 300px 250px"
          data={tokens.map((e) => [e.symbol, e.bal, `$${e.val}`])}
          header={[
            <span key="currency">Currency</span>,
            <span key="balance">Balance</span>,
            <span key="value">Value</span>,
          ]}
        />
      )}
    </>
  );
}

export default Tokens;
