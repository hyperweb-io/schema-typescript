export type Addr = string;
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
}
export type AssetInfo = {
  token: {
    contractAddr: Addr;
  };
} | {
  nativeToken: {
    denom: string;
  };
};
export type Binary = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export type Decimal = string;
export interface FeeInfo {
  devFeePercent: number;
  developerAddr?: Addr | null;
  protocolFeePercent: number;
  totalFeeBps: number;
}
export interface PoolConfig {
  codeId: number;
  feeInfo: FeeInfo;
  isDisabled: boolean;
  isGeneratorDisabled: boolean;
  poolType: PoolType;
}
export type PoolType = {
  xyk: {
    [key: string]: unknown;
  };
} | {
  stable2Pool: {
    [key: string]: unknown;
  };
} | {
  stable3Pool: {
    [key: string]: unknown;
  };
} | {
  weighted: {
    [key: string]: unknown;
  };
} | {
  custom: string;
};
export interface SingleSwapRequest {
  amount: Uint128;
  assetIn: AssetInfo;
  assetOut: AssetInfo;
  beliefPrice?: Decimal | null;
  maxSpread?: Decimal | null;
  poolId: Uint128;
  swapType: SwapType;
}
export type SwapType = {
  giveIn: {
    [key: string]: unknown;
  };
} | {
  giveOut: {
    [key: string]: unknown;
  };
} | {
  custom: string;
};
export type Uint128 = string;
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  updateConfig: {
    feeCollector?: string | null;
    generatorAddress?: string | null;
    lpTokenCodeId?: number | null;
  };
} | {
  updatePoolConfig: {
    isDisabled?: boolean | null;
    newFeeInfo?: FeeInfo | null;
    poolType: PoolType;
  };
} | {
  addToRegistery: {
    newPoolConfig: PoolConfig;
  };
} | {
  createPoolInstance: {
    assetInfos: AssetInfo[];
    initParams?: Binary | null;
    lpTokenName?: string | null;
    lpTokenSymbol?: string | null;
    poolType: PoolType;
  };
} | {
  joinPool: {
    assets?: Asset[] | null;
    autoStake?: boolean | null;
    lpToMint?: Uint128 | null;
    poolId: Uint128;
    recipient?: string | null;
    slippageTolerance?: Decimal | null;
  };
} | {
  swap: {
    recipient?: string | null;
    swapRequest: SingleSwapRequest;
  };
} | {
  proposeNewOwner: {
    expiresIn: number;
    owner: string;
  };
} | {
  dropOwnershipProposal: {
    [key: string]: unknown;
  };
} | {
  claimOwnership: {
    [key: string]: unknown;
  };
};