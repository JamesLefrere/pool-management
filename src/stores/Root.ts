// Stores
import PoolStore from './Pool';
import ProviderStore from './Provider';
import ManageFormStore from './ManageForm';
import SwapFormStore from './SwapForm';
import InvestFormStore from './InvestForm';
import TokenStore from './Token';
import FaucetStore from './Faucet';
import UtilStore from './Util';

class RootStore {
    providerStore: ProviderStore;
    poolStore: PoolStore;
    manageFormStore: ManageFormStore;
    swapFormStore: SwapFormStore;
    investFormStore: InvestFormStore;
    tokenStore: TokenStore;
    faucetStore: FaucetStore;
    utilStore: UtilStore;
    dataUpdateInterval: any;

    constructor() {
        this.providerStore = new ProviderStore(this);
        this.poolStore = new PoolStore(this);
        this.manageFormStore = new ManageFormStore(this);
        this.swapFormStore = new SwapFormStore(this);
        this.investFormStore = new InvestFormStore(this);
        this.tokenStore = new TokenStore(this);
        this.faucetStore = new FaucetStore(this);
        this.utilStore = new UtilStore(this);
        // this.asyncSetup();
    }

    // asyncSetup = async () => {
    //     await this.providerStore.setWeb3WebClient();
    // };

    setDataUpdateInterval = async (poolAddress, userAddress) => {
        this.dataUpdateInterval = setInterval(async () => {
            console.log(
                `data update for pool ${poolAddress}, for user ${userAddress}`
            );
        }, 2000);
    };

    // setPendingTxInterval = () => {
    //     this.pendingTxInterval = setInterval(() => {
    //         this.transactions.checkPendingTransactions();
    //     }, 10000);
    // }

    // loadContracts = () => {
    //     if (this.network.network && !this.network.stopIntervals) {
    //         blockchain.resetFilters(true);
    //         if (typeof this.pendingTxInterval !== "undefined") clearInterval(this.pendingTxInterval);
    //         const addrs = settings.chain[this.network.network];
    //         blockchain.loadObject("proxyregistry", addrs.proxyRegistry, "proxyRegistry");
    //         const setUpPromises = [blockchain.getProxy(this.network.defaultAccount)];
    //         Promise.all(setUpPromises).then(r => {
    //             this.system.init();
    //             this.network.stopLoadingAddress();
    //             this.profile.setProxy(r[0]);
    //             this.profile.loadAllowances();
    //             this.setPendingTxInterval();
    //         });
    //     }
    // }
}

const store = new RootStore();
export { RootStore, store };
