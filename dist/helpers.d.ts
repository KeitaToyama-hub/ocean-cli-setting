import { ethers, Signer } from "ethers";
import { Asset, DDO } from '@oceanprotocol/ddo-js';
import { Aquarius, ProviderComputeInitialize, ConsumeMarketFee, Datatoken, Config, DownloadResponse, ProviderFees, ComputeAlgorithm } from "@oceanprotocol/lib";
export declare function downloadFile(url: string, downloadPath: string, index?: number): Promise<DownloadResponse>;
export declare function calculateActiveTemplateIndex(owner: Signer, nftContractAddress: string, // addresses.ERC721Factory,
template: string | number): Promise<number>;
export declare function getSignerAccordingSdk(signer: Signer, config: Config): ethers.Signer;
export declare function createAssetUtil(name: string, symbol: string, owner: Signer, assetUrl: any, ddo: DDO, oceanNodeUrl: string, config: Config, aquariusInstance: Aquarius, encryptDDO?: boolean, templateIDorAddress?: string | number, // If string, it's template address , otherwise, it's templateId,
providerFeeToken?: string, accessListFactory?: string, allowAccessList?: string, denyAccessList?: string): Promise<string>;
export declare function updateAssetMetadata(owner: Signer, updatedDdo: Asset, oceanNodeUrl: string, aquariusInstance: Aquarius, encryptDDO?: boolean): Promise<any>;
export declare function handleComputeOrder(order: ProviderComputeInitialize, asset: Asset, payerAccount: Signer, consumerAddress: string, serviceIndex: number, datatoken: Datatoken, config: Config, providerFees: ProviderFees, oceanNodeUrl: string, consumeMarkerFee?: ConsumeMarketFee): Promise<string>;
export declare function isOrderable(asset: Asset | DDO, serviceId: string, algorithm: ComputeAlgorithm, algorithmDDO: Asset | DDO): Promise<boolean>;
export declare function isPrivateIP(ip: any): boolean;
export declare function getPublicIP(): Promise<string>;
export declare function getMetadataURI(): Promise<string>;
export interface IndexerWaitParams {
    maxRetries: number;
    retryInterval: number;
}
export declare function getIndexingWaitSettings(): IndexerWaitParams;
export declare function fixAndParseProviderFees(rawString: string): any;
export declare function toBoolean(value: any): boolean;
export declare function getConfigByChainId(chainId: number): Promise<any>;
