import * as anchor from '@project-serum/anchor';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MintCountdown } from './MintCountdown';
import { toDate, formatNumber } from './utils';
import { CandyMachine } from './candy-machine';

type HeaderProps = {
  candyMachine?: CandyMachine;
};

export const Header = ({ candyMachine }: HeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="center" wrap="nowrap">
      <Grid container direction="row" wrap="nowrap">
        {candyMachine && (
          <Grid container direction="row" wrap="nowrap">
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                SUPPLY
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  fontWeight: 'bold',
                }}
              >
                {`${candyMachine?.state.itemsRemaining}/${candyMachine?.state.itemsAvailable}`}
              </Typography>
            </Grid>
            <Grid container direction="column">
              <Typography variant="body2" color="textSecondary">
                PRICE
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ fontWeight: 'bold' }}
              >
                {getMintPrice(candyMachine)}
              </Typography>
            </Grid>
          </Grid>
        )}
        <MintCountdown
          date={toDate(
            candyMachine?.state.goLiveDate
              ? candyMachine?.state.goLiveDate
              : undefined,
          )}
          style={{ justifyContent: 'flex-end' }}
          status={
            !candyMachine?.state?.isActive || candyMachine?.state?.isSoldOut
              ? 'COMPLETED'
              : 'LIVE'
          }
        />
      </Grid>
    </Grid>
  );
};

const getMintPrice = (candyMachine: CandyMachine): string => {
  const price = ("0.5 SOL");
  return `${price}`;
};
