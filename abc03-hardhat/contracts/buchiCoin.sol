// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract anitaCoin is ERC20{

    constructor() ERC20("buchiCoin", "buchi"){
        _mint(msg.sender, 50000000000000000000);
    }
}