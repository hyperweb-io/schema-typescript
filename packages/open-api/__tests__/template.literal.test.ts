import generate from '@babel/generator';

import { createPathTemplateLiteral } from '../src';
import { getDefaultSchemaTSOptions } from '../src';

const options = getDefaultSchemaTSOptions();
export const renderTemplateTag = (str: string) => {
    return generate(createPathTemplateLiteral({
        ...options,
        mergedParams: true
    }, str)).code
}
it('/osmosis/{gamm}/v1beta1/estimate/swap_exact_amount_in', () => {
    expect(renderTemplateTag('/osmosis/{gamm}/v1beta1/estimate/swap_exact_amount_in'))
        .toEqual("`/osmosis/${params.gamm}/v1beta1/estimate/swap_exact_amount_in`");
});

it('/osmosis/{gamm}/v1beta1/{estimate}/swap_exact_amount_in', () => {
    expect(renderTemplateTag('/osmosis/{gamm}/v1beta1/{estimate}/swap_exact_amount_in'))
        .toEqual("`/osmosis/${params.gamm}/v1beta1/${params.estimate}/swap_exact_amount_in`");
});

it('/osmosis/{gamm}/{v1beta1}/{estimate}/{swap_exact_amount_in}', () => {
    expect(renderTemplateTag('/osmosis/{gamm}/{v1beta1}/{estimate}/{swap_exact_amount_in}'))
        .toEqual("`/osmosis/${params.gamm}/${params.v1beta1}/${params.estimate}/${params.swap_exact_amount_in}`");
});

it('/osmosis/gamm/v1beta1/estimate/{swap_exact_amount_in}', () => {
    expect(renderTemplateTag('/osmosis/gamm/v1beta1/estimate/{swap_exact_amount_in}'))
        .toEqual("`/osmosis/gamm/v1beta1/estimate/${params.swap_exact_amount_in}`");
});

it('/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}', () => {
    expect(renderTemplateTag('/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}'))
        .toEqual("`/cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`");
});

it('/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}', () => {
    expect(renderTemplateTag('/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}'))
        .toEqual("`/cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`");
});

it('/cosmos/gov/v1beta1/proposals/{proposal_id}/tally', () => {
    expect(renderTemplateTag('/cosmos/gov/v1beta1/proposals/{proposal_id}/tally'))
        .toEqual("`/cosmos/gov/v1beta1/proposals/${params.proposal_id}/tally`");
});

it('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations', () => {
    expect(renderTemplateTag('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations'))
        .toEqual("`/cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations`");
});

it('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}', () => {
    expect(renderTemplateTag('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}'))
        .toEqual("`/cosmos/staking/v1beta1/validators/${params.validator_addr}/delegations/${params.delegator_addr}`");
});

it('/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}', () => {
    expect(renderTemplateTag('/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}'))
        .toEqual("`/cosmos/gov/v1beta1/proposals/${params.proposal_id}/votes/${params.voter}`");
});
