import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { observer } from 'mobx-react';
import {
    formatPercentage,
    formatPoolAssetChartData,
} from '../../utils/helpers';
import { useStores } from '../../contexts/storesContext';
import { Pool } from '../../types';
import { poolAssetColors } from '../index';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 10px 20px 20px;
    background: var(--panel-background);
    border: 1px solid var(--panel-border);
    border-radius: 4px;
    width: 33%;
    min-width: 246px;
`;

const PieChartWrapper = styled.div`
    width: 125px;
    height: 125px;
`;

const BreakdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5px;
`;

const AssetPercentageContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-left: 12px;
    width: 78px;
`;

const AssetPercentageText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--panel-row-text);
    margin-left: 6px;
`;

const AssetDot = styled.div`
    height: 4px;
    width: 4px;
    border-radius: 6px;
    background: ${props => props.dotColor};
`;

interface Props {
    poolAddress: string;
}

const PoolAssetChartPanel = observer((props: Props) => {
    const { poolAddress } = props;
    const {
        root: { poolStore },
    } = useStores();
    const pool = poolStore.getPool(poolAddress);

    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
    };

    const renderAssetPercentages = (pool: Pool) => {
        return (
            <React.Fragment>
                {pool.tokens.map((token, index) => {
                    return (
                        <AssetPercentageContainer>
                            <AssetDot dotColor={poolAssetColors[index]} />
                            <AssetPercentageText>
                                {formatPercentage(
                                    token.denormWeightProportion,
                                    2
                                )}{' '}
                                {token.symbol}
                            </AssetPercentageText>
                        </AssetPercentageContainer>
                    );
                })}
            </React.Fragment>
        );
    };

    return (
        <Wrapper>
            <PieChartWrapper>
                {pool ? (
                    <Pie
                        type={'doughnut'}
                        data={formatPoolAssetChartData(pool)}
                        options={options}
                    />
                ) : (
                    <div>Loading</div>
                )}
            </PieChartWrapper>
            <BreakdownContainer>
                {pool ? renderAssetPercentages(pool) : <div>Loading</div>}
            </BreakdownContainer>
        </Wrapper>
    );
});

export default PoolAssetChartPanel;
