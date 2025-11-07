
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { useWalletKit } from '@mysten/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';



function Config(){
    const client = new SuiClient({ url: getFullnodeUrl('testnet') });
    const { signAndExecuteTransactionBlock } = useWalletKit();
    const packageObjectId = '0x87ee868effac65de88691730d1bb696f9ecc744ff1ae3f35c22e4262815a40b7'
    const tx = new TransactionBlock();
    const devhub = tx.object("0x...")
    
}


export default Config