export const getLastBlockNumber = async (alchemy, dispatch) => {
    const lastBlockNumber = await alchemy.core.getBlockNumber();
    console.log(lastBlockNumber);
    dispatch({type: 'UPDATE_LAST_BLOCK_NUMBER', payload: {lastBlockNumber} });
}