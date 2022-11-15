// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Owner.sol";
import "./CounterChainlink.sol";

contract ImmutableLedger is Owner {
    struct Transaction {
        string id;
        string paymentMethod;
        string to;
        string from;
        uint256 amount;
        string transactionId;
        string currency;
        uint256 paymentTime; //
        string accountId;
        string eventName;
        string organisationId;
    }

    struct Organisation {
        string id;
        string name;
        bool isActive;
        address createdBy;
        string createdAt;
    }

    Transaction[] private transactions;

    mapping(string => Organisation) public organisations;

    event TransactionAdded(
        bytes32 indexed requestId,
        string indexed _id,
        string indexed _paymentMethod,
        string indexed _to,
        string indexed _from,
        uint256 _amount,
        string indexed _transactionId,
        string indexed _currency,
        uint256 _paymentTime,
        string indexed _accountId,
        string indexed _eventName,
        string indexed _organisationId
    );

    function addTransaction(
        string memory _id,
        string memory _paymentMethod,
        string memory _to,
        string memory _from,
        uint256 _amount,
        string memory _transactionId,
        string memory _currency,
        uint256 _paymentTime,
        string memory _accountId,
        string memory _eventName,
        string memory _organisationId
    ) private {
        transactions.push(
            Transaction(
                _id,
                _paymentMethod,
                _to,
                _from,
                _amount,
                _transactionId,
                _currency,
                _paymentTime,
                _accountId,
                _eventName,
                _organisationId
            )
        );

        emit TransactionAdded(
            _id,
            _paymentMethod,
            _to,
            _from,
            _amount,
            _transactionId,
            _currency,
            _paymentTime,
            _accountId,
            _eventName,
            _organisationId
        );
    }

    function getAllTrasactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function getAllOrganisation(string memory _id)
        public
        view
        returns (Organisation memory)
    {
        return organisations[_id];
    }

    function createOrganisation(
        string memory _id,
        string memory _name,
        bool _isActive,
        address _createdBy,
        string memory _createdAt
    ) public returns (bool) {
        // require(users[msg.sender].walletAddress == address(0), "Already exising User");
        organisations[_id] = Organisation(
            _id,
            _name,
            _isActive,
            _createdBy,
            _createdAt
        );
        return true; // Emit the event
    }

    function disableOrganisation(string memory _id) public returns (bool) {
        require(organisations[_id].isActive == false, "Already inActive User");
        organisations[_id].isActive = false;
        return true; // emit the event
    }
}
