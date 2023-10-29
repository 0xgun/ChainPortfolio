import React, { useState, useEffect } from 'react';
import { Input } from '@web3uikit/core';
import { Reload } from '@web3uikit/icons';

function Nfts({ wallet, chain, nfts, setNfts, filteredNfts, setFilteredNfts }) {
  useEffect(() => {
    async function getTopTrendingNFTs() {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-api-key': 'demo' },
      };
      const res = await fetch(
        'https://api.chainbase.online/v1/account/nfts?chain_id=1&address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&page=1&limit=100',
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      console.log(res);
      setNfts(res);
    }
    getTopTrendingNFTs();
  }, []);

  console.log(nfts);
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
      <div className="nftList">
        {nfts?.data?.length
          ? nfts?.data?.map((e) => (
              <div className="nftInfo">
                {e.image_uri && <img src={e.image_uri} width={200} />}
                {console.log(e.image_uri)}
                <div>Name: {e.name} </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
export default Nfts;
