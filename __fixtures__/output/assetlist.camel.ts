export interface Asset {
  deprecated?: boolean;
  description?: string;
  extendedDescription?: string;
  denomUnits: DenomUnit[];
  typeAsset?: string;
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: any[];
  ibc?: {
    sourceChannel: string;
    dstChannel: string;
    sourceDenom: string;
  };
  logoURIs?: {
    png?: string;
    svg?: string;
  };
  images?: {
    imageSync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primaryColorHex?: string;
      circle?: boolean;
      darkMode?: boolean;
    };
  }[];
  coingeckoId?: string;
  keywords?: string[];
  socials?: {
    website?: string;
    twitter?: string;
  };
}
export interface DenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}
export interface Pointer {
  chainName: string;
  baseDenom?: string;
}
export interface IbcTransition {
  type: string;
  counterparty: {
    chainName: string;
    baseDenom: string;
    channelId: string;
  };
  chain: {
    channelId: string;
    path: string;
  };
}
export interface IbcCw20Transition {
  type: string;
  counterparty: {
    chainName: string;
    baseDenom: string;
    port: string;
    channelId: string;
  };
  chain: {
    port: string;
    channelId: string;
    path: string;
  };
}
export interface NonIbcTransition {
  type: string;
  counterparty: {
    chainName: string;
    baseDenom: string;
    contract?: string;
  };
  chain?: {
    contract: string;
  };
  provider: string;
}
export interface AssetLists {
  schema?: string;
  chainName: string;
  assets: Asset[];
}