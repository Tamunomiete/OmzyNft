//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0; // tell etheruem solidty version we  are working with

// import standard implementation of erc721 
import  "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Omzycats is ERC721{
    constructor() ERC721("Omzcats" , "Omz"){
      // mint 5 nft for myself
      _mint(msg.sender, 1);  
      _mint(msg.sender, 2);
      _mint(msg.sender, 3);
      _mint(msg.sender, 4);
      _mint(msg.sender, 5);
 }

}