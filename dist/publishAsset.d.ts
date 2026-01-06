import { Signer } from 'ethers';
import { Config, Aquarius } from '@oceanprotocol/lib';
export interface PublishAssetParams {
    title: string;
    description: string;
    author: string;
    tags: string[];
    timeout: string;
    storageType: 'ipfs' | 'arweave' | 'url';
    assetLocation: string;
    isCharged: boolean;
    token?: 'OCEAN' | 'H2O';
    price?: string;
    chainId: number;
    template?: number;
    providerUrl: string;
}
export declare function publishAsset(aquarius: Aquarius, params: PublishAssetParams, signer: Signer, config: Config): Promise<void>;
