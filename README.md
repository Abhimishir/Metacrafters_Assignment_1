NFT Minting and Listing System
Overview
This is a simple NFT minting and listing system that allows users to create and list NFTs with their respective details. The system provides functions to mint new NFTs, list all existing NFTs, and get the total supply of NFTs.

Functions
mintNFT(_name, _developers, _description, _game)
Mints a new NFT with the provided details:

_name: The name of the NFT
_developers: The developers of the NFT
_description: A brief description of the NFT
_game: The game for which the NFT is made
listNFTs()
Lists all existing NFTs with their details, including:

NFT name
Developers of the NFT
Description of the NFT
Game for which the NFT is made
getTotalSupply()
Returns the total number of NFTs minted.

Usage
To use the system, simply call the mintNFT function to create new NFTs, and then call the listNFTs function to list all existing NFTs. You can also use the getTotalSupply function to get the total number of NFTs minted.

Example
Here is an example usage of the system:


Open In Editor
Edit
Copy code
mintNFT("NFT1", "Riot Games", "An Action Multiplayer game for fun", "Valorant");
mintNFT("NFT2", "Rockstar Games", "RPG game with the best story around", "Red Dead Redemption 2");
mintNFT("NFT3", "Hoyoverse", "RPG highest Grossing game for the 1st year of release", "Genshin Impact");

listNFTs();
console.log("Total NFTs: " + getTotalSupply());
This will mint three new NFTs and then list all existing NFTs, along with the total supply of NFTs.

License
This system is licensed under the MIT License. See the LICENSE file for details.
