import React from 'react';
import axios from 'axios';
import { Table } from '@web3uikit/core';
import { Reload } from '@web3uikit/icons';

function NativeTokens({
  wallet,
  chain,
  nativeBalance,
  setNativeBalance,
  nativeValue,
  setNativeValue,
}) {
  async function getNativeBalance() {
    const options = {
      method: 'GET',
      url: 'https://api.chainbase.online/v1/account/balance',
      params: {
        chain_id: chain,
        address: wallet,
        to_block: 'latest',
      },
      headers: { accept: 'application/json', 'x-api-key': 'demo' },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(parseInt(response.data.data, 16));
        setNativeBalance(parseInt(response.data.data, 16));
        setNativeValue(parseInt(response.data.data, 16));
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <div className="tabHeading">
        Native Balance
        <Reload onClick={getNativeBalance} />
      </div>

      {nativeBalance > 0 && nativeValue > 0 && (
        <Table
          pageSize={1}
          noPagination={true}
          style={{ width: '900px' }}
          columnsConfig="300px 300px 250px"
          data={[['Native', nativeBalance, `$${nativeValue}`]]}
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

export default NativeTokens;
