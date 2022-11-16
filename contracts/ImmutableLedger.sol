// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Owner.sol";

contract ImmutableLedger is Owner {
    struct Transaction {
        bytes32 requestId;
        string paymentMethod;
        string to;
        string from;
        uint256 amount;
        string transactionId;
        string currency;
        string paymentTime; //
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
        string _paymentMethod,
        string _to,
        string indexed _from,
        uint256 _amount,
        string _transactionId,
        string _currency,
        string _paymentTime,
        string _accountId,
        string _eventName,
        string _organisationId
    );

    function addTransaction(
        bytes32 _requestId,
        string memory _paymentMethod,
        string memory _to,
        string memory _from,
        uint256 _amount,
        string memory _transactionId,
        string memory _currency,
        string _paymentTime,
        string memory _accountId,
        string memory _eventName,
        string memory _organisationId
    ) internal {
        transactions.push(
            Transaction(
                _requestId,
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
            _requestId,
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
        return true;
    }

    function disableOrganisation(string memory _id) public returns (bool) {
        require(organisations[_id].isActive == false, "Already inActive User");
        organisations[_id].isActive = false;
        return true;
    }
}
