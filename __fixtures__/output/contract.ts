export type Addr = string;
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
}
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
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
  dev_fee_percent: number;
  developer_addr?: Addr | null;
  protocol_fee_percent: number;
  total_fee_bps: number;
}
export interface PoolConfig {
  code_id: number;
  fee_info: FeeInfo;
  is_disabled: boolean;
  is_generator_disabled: boolean;
  pool_type: PoolType;
}
export type PoolType = {
  xyk: {
    [key: string]: unknown;
  };
} | {
  stable2_pool: {
    [key: string]: unknown;
  };
} | {
  stable3_pool: {
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
  asset_in: AssetInfo;
  asset_out: AssetInfo;
  belief_price?: Decimal | null;
  max_spread?: Decimal | null;
  pool_id: Uint128;
  swap_type: SwapType;
}
export type SwapType = {
  give_in: {
    [key: string]: unknown;
  };
} | {
  give_out: {
    [key: string]: unknown;
  };
} | {
  custom: string;
};
export type Uint128 = string;
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  update_config: {
    fee_collector?: string | null;
    generator_address?: string | null;
    lp_token_code_id?: number | null;
  };
} | {
  update_pool_config: {
    is_disabled?: boolean | null;
    new_fee_info?: FeeInfo | null;
    pool_type: PoolType;
  };
} | {
  add_to_registery: {
    new_pool_config: PoolConfig;
  };
} | {
  create_pool_instance: {
    asset_infos: AssetInfo[];
    init_params?: Binary | null;
    lp_token_name?: string | null;
    lp_token_symbol?: string | null;
    pool_type: PoolType;
  };
} | {
  join_pool: {
    assets?: Asset[] | null;
    auto_stake?: boolean | null;
    lp_to_mint?: Uint128 | null;
    pool_id: Uint128;
    recipient?: string | null;
    slippage_tolerance?: Decimal | null;
  };
} | {
  swap: {
    recipient?: string | null;
    swap_request: SingleSwapRequest;
  };
} | {
  propose_new_owner: {
    expires_in: number;
    owner: string;
  };
} | {
  drop_ownership_proposal: {
    [key: string]: unknown;
  };
} | {
  claim_ownership: {
    [key: string]: unknown;
  };
};