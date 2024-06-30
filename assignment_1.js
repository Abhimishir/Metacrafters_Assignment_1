let nfts = [];

function mintNFT(_name, _developers, _description, _game) {
  let nft = {
    name: _name,
    developers: _developers,
    description: _description,
    game: _game
  };
  nfts.push(nft);
}

function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log("NFT " + (index + 1));
    console.log("Name: " + nft.name);
    console.log("Developers of NFTs: " + nft.developers);
    console.log("Description of NFT: " + nft.description);
    console.log("Game for which nft is made: " + nft.game);
    console.log("-----------------------------");
  });
}

function getTotalSupply() {
  return nfts.length;
}

mintNFT("NFT1", "Riot Games", "An Action Multiplayer game for fun", "Valorant");
mintNFT("NFT2", "Rockstar Games", "RPG game with the best story around", "Red Dead Redemption 2");
mintNFT("NFT3", "Hoyoverse", "RPG highest Grossing game for the 1st year of release", "Genshin Impact");

listNFTs();
console.log("Total NFTs: " + getTotalSupply());
