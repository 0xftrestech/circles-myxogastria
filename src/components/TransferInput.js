import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Input, InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(2),
    height: 66,
    boxShadow: 'inset 1px 1px 1px 1px rgba(0,0,0,0.15)',
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 12,
    textAlign: 'left',
  },
  inputError: {
    '&.Mui-error': {
      color: theme.custom.colors.red,
    },
  },
  inputAmountError: {
    color: theme.custom.colors.red,
  },
}));

const TransferInput = ({
  className,
  errorMessage,
  id,
  isError = false,
  label,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <InputLabel className={classes.inputLabel} htmlFor={id}>
        {label}
      </InputLabel>
      <Input
        classes={{
          root: classes.input,
          input: className,
          error: classes.inputAmountError,
        }}
        disableUnderline
        error={isError}
        fullWidth
        id={id}
        {...props}
      />
      {isError && (
        <FormHelperText className={classes.inputError} error>
          {errorMessage}
        </FormHelperText>
      )}
    </Fragment>
  );
};

TransferInput.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default TransferInput;
