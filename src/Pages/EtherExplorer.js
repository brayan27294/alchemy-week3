import React, { useState } from 'react';
import SearchBlockForm from '../Components/Block/SearchBlockForm';
import EtherInfo from '../Components/EtherInfo';

const EtherExplorer = ({alchemy}) => {
    const [blockNumber, setBlockNumber] = useState(null);
    return (
    <>
        <SearchBlockForm alchemy={alchemy} setBlockNumber={setBlockNumber}/>
        <EtherInfo blockNumber={blockNumber} alchemy={alchemy}/>
    </>);
}

export default EtherExplorer;