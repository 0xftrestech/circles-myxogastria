import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { IconCircles } from '~/styles/icons';
import { formatCirclesValue } from '~/utils/format';

const useStyles = makeStyles((theme) => ({
  box: {
    maxWidth: theme.spacing(70),
    margin: `${theme.spacing(2)}px auto`,
    textAlign: 'center',
  },
  balance: {
    fontSize: '2.5rem',
    fontWeight: theme.typography.fontWeightRegular,
  },
  balanceIcon: {
    position: 'relative',
    top: 2,
    marginRight: theme.spacing(0.5),
    fontSize: '2rem',
  },
}));

const BalanceDisplayOrganization = () => {
  const classes = useStyles();
  const { token, safe } = useSelector((state) => state);

  const isLoading =
    (token.balance === null || token.balance === '0') && !safe.pendingNonce;

  return (
    <Box className={classes.box}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Typography className={classes.balance}>
          <IconCircles className={classes.balanceIcon} />
          {token.balance !== null ? formatCirclesValue(token.balance) : 0}
        </Typography>
      )}
    </Box>
  );
};

export default BalanceDisplayOrganization;
