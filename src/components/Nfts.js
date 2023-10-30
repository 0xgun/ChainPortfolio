import React, { useState, useEffect } from 'react';
import { Input } from '@web3uikit/core';
import { Reload } from '@web3uikit/icons';

function Nfts({ wallet, chain }) {
  const [nftData, setNftData] = useState(null);
  useEffect(() => {
    async function getTopTrendingNFTs() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': '2XAceZuqsW8jhOJlWYhfwb4asBQ',
        },
      };
      const res = await fetch(
        `https://api.chainbase.online/v1/account/nfts?chain_id=${chain}&address=${wallet}&page=1&limit=100`,
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      setNftData(res.data);
    }
    getTopTrendingNFTs();
  });
  return (
    <div>
      <div className="tabHeading">
        NFT Portfolio
        <Reload />
      </div>

      <div className="filters">
        <Input
          id="NameF"
          label="Name Filter"
          labelBgColor="rgb(33, 33, 38)"
          style={{}}
        />
        <Input
          id="IdF"
          label="Id Filter"
          labelBgColor="rgb(33, 33, 38)"
          style={{}}
        />
      </div>

      {nftData && nftData.length > 0 ? (
        <div className="nftList">
          {nftData.map((e) => (
            <div className="nftInfo">
              {e.image_uri && <img src={e.image_uri} width={200} alt="img" />}
              <div>Name: {e.name} </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Nfts;
