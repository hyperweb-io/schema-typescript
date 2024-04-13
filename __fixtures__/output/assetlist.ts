interface Asset {
  deprecated?: boolean;
  description?: string;
  extended_description?: string;
  denom_units: Denomunit[];
  type_asset?: string;
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: any[];
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  images?: {
    image_sync?: Pointer;
    png?: string;
    svg?: string;
    theme?: {
      primary_color_hex?: string;
      circle?: boolean;
      dark_mode?: boolean;
    };
  }[];
  coingecko_id?: string;
  keywords?: string[];
  socials?: {
    website?: string;
    twitter?: string;
  };
}
interface Denomunit {
  denom: string;
  exponent: number;
  aliases?: string[];
}
interface Pointer {
  chain_name: string;
  base_denom?: string;
}
interface Ibctransition {
  type: string;
  counterparty: {
    chain_name: string;
    base_denom: string;
    channel_id: string;
  };
  chain: {
    channel_id: string;
    path: string;
  };
}
interface Ibccw20transition {
  type: string;
  counterparty: {
    chain_name: string;
    base_denom: string;
    port: string;
    channel_id: string;
  };
  chain: {
    port: string;
    channel_id: string;
    path: string;
  };
}
interface Nonibctransition {
  type: string;
  counterparty: {
    chain_name: string;
    base_denom: string;
    contract?: string;
  };
  chain?: {
    contract: string;
  };
  provider: string;
}
interface Asset Lists {
  $schema?: string;
  chain_name: string;
  assets: Asset[];
}