//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


/**

 * @author ASSETCHAIN DEVREL TEAM
   @author James Harrison(https://github.com/KodeSage/)
   @author  Okorie Ebube(https://github.com/theiceeman)
 */
contract Greeter {
	// State Variables
	string private greeting;



	// Constructor: Called once on contract deployment
	 constructor(string memory _greeting) {
        greeting = _greeting;
    }

	 function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
	
}
