import React from 'react';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TransferInput from '~/components/TransferInput';
import { IconCircles } from '~/styles/icons';

const useStyles = makeStyles(() => ({
  input: {
    fontSize: 27,
  },
}));

const TransferCirclesInput = (props) => {
  const classes = useStyles();

  return (
    <TransferInput
      className={classes.input}
      inputProps={{
        min: 0,
      }}
      startAdornment={
        <InputAdornment position="start">
          <IconCircles />
        </InputAdornment>
      }
      type="number"
      {...props}
    />
  );
};

export default TransferCirclesInput;
