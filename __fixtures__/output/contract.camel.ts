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
  developerAddr?: Addr | any;
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
  xyk: any;
} | {
  stable2Pool: any;
} | {
  stable3Pool: any;
} | {
  weighted: any;
} | {
  custom: string;
};
export interface SingleSwapRequest {
  amount: Uint128;
  assetIn: AssetInfo;
  assetOut: AssetInfo;
  beliefPrice?: Decimal | any;
  maxSpread?: Decimal | any;
  poolId: Uint128;
  swapType: SwapType;
}
export type SwapType = {
  giveIn: any;
} | {
  giveOut: any;
} | {
  custom: string;
};
export type Uint128 = string;
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  updateConfig: {
    feeCollector?: any;
    generatorAddress?: any;
    lpTokenCodeId?: any;
  };
} | {
  updatePoolConfig: {
    isDisabled?: any;
    newFeeInfo?: FeeInfo | any;
    poolType: PoolType;
  };
} | {
  addToRegistery: {
    newPoolConfig: PoolConfig;
  };
} | {
  createPoolInstance: {
    assetInfos: AssetInfo[];
    initParams?: Binary | any;
    lpTokenName?: any;
    lpTokenSymbol?: any;
    poolType: PoolType;
  };
} | {
  joinPool: {
    assets?: any;
    autoStake?: any;
    lpToMint?: Uint128 | any;
    poolId: Uint128;
    recipient?: any;
    slippageTolerance?: Decimal | any;
  };
} | {
  swap: {
    recipient?: any;
    swapRequest: SingleSwapRequest;
  };
} | {
  proposeNewOwner: {
    expiresIn: number;
    owner: string;
  };
} | {
  dropOwnershipProposal: any;
} | {
  claimOwnership: any;
};