import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Utils } from 'alchemy-sdk';
import { Box } from '@mui/material';

const columns = [
    { field: 'hash', headerName: 'ID'},
    {
      field: 'from',
      headerName: 'From',
    },
    {
      field: 'to',
      headerName: 'To',
    },
    {
      field: 'value',
      headerName: 'Value',
      width: 230,
      valueGetter: (params) => `${Utils.formatUnits(params.row.value._hex, 'ether')} ETH`
    },
    {
        field: 'gasPrice',
        headerName: 'Gas Price (Gwei)',
        width: 230,
        valueGetter: (params) => `${Utils.formatUnits(params.row.gasPrice._hex, 'gwei')} Gwei`
    },
    {
      field: 'gasPriceEth',
      headerName: 'Gas Price (ETH)',
      width: 230,
      valueGetter: (params) => `${Utils.formatUnits(params.row.gasPrice._hex, 'ether')} ETH`
    },
    {
      field: 'nonce',
      headerName: 'Nonce',
      valueGetter: (params) => params.row.nonce.toLocaleString('en-US')
    },
    {
      field: 'transactionIndex',
      headerName: 'Position in Block',
    },
    {
      field: 'gasLimit',
      headerName: 'Gas Limit',
      valueGetter: (params) => parseInt(params.row.gasLimit._hex).toLocaleString('en-US')
    },
    {
      field: 'confirmations',
      headerName: 'Confirmations',
    },
    {
        field: 'type',
        headerName: 'Type'
    },
  ];

const ListOfTransactions = ({ethBlock , alchemy}) => {
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        if(ethBlock){
            const fetchBlockWithTransactions = async() => {
                const response = await alchemy.core.getBlockWithTransactions(ethBlock.hash);
                setTransactions(response.transactions);
            }
            fetchBlockWithTransactions();
        }
    },[alchemy.core, ethBlock]);

    console.log(transactions);

  return (
    <Box sx={{ height: 630, width: '100%' }}>
        <DataGrid
        rows={transactions}
        columns={columns}
        getRowId={(row) =>  row.transactionIndex}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
  );
}

export default ListOfTransactions;