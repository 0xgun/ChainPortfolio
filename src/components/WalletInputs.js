import React from 'react';
import '../App.css';
import { Input, Select, CryptoLogos } from '@web3uikit/core';
import Base from '../img/base-logo-in-blue.png';
import zkSync from '../img/download (1).png';
import logo from '../img/Logo_Icon_white_512.png';
function WalletInputs({ chain, setChain, wallet, setWallet }) {
  return (
    <>
      <div className="header">
        <div className="title">
          <img src={logo} className="logo" alt="logo" />
          <h1>ChainPortfolio</h1>
        </div>

        <div className="walletInputs">
          <Input
            id="Wallet"
            label="Wallet Address"
            labelBgColor="rgb(33, 33, 38)"
            value={wallet}
            style={{ height: '50px' }}
            onChange={(e) => setWallet(e.target.value)}
          />
          <Select
            defaultOptionIndex={0}
            id="Chain"
            onChange={(e) => setChain(e.value)}
            options={[
              {
                id: 'eth',
                label: 'Ethereum',
                value: '0x1',
                prefix: <CryptoLogos chain="ethereum" />,
              },
              {
                id: 'matic',
                label: 'Polygon',
                value: '137',
                prefix: <CryptoLogos chain="polygon" />,
              },
              {
                id: 'bsc',
                label: 'Binance Smart Chain',
                value: '56',
                prefix: <CryptoLogos chain="binance" />,
              },
              {
                id: 'avalanche',
                label: 'Avalanche',
                value: '43114',
                prefix: <CryptoLogos chain="avalanche" />,
              },
              {
                id: 'arbitrum',
                label: 'Arbitrum One',
                value: '42161',
                prefix: <CryptoLogos chain="arbitrum" />,
              },
              {
                id: 'optimism',
                label: 'Optimism',
                value: '10',
                prefix: <CryptoLogos chain="optimism" />,
              },
              {
                id: 'base',
                label: 'Base',
                value: '8453',
                prefix: <img src={Base} alt="base" />,
              },
              {
                id: 'zkSync',
                label: 'zkSync',
                value: '324',
                prefix: <img src={zkSync} alt="zk" />,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default WalletInputs;
