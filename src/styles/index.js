import React, { Fragment } from 'react';

import Background from '~/styles/Background';
import Fonts from '~/styles/Fonts';
import Global from '~/styles/Global';
import Layout from '~/styles/Layout';
import Links from '~/styles/Links';
import Lists from '~/styles/Lists';
import Typography from '~/styles/Typography';

const GlobalStyle = () => {
  return (
    <Fragment>
      <Background />
      <Fonts />
      <Global />
      <Layout />
      <Links />
      <Lists />
      <Typography />
    </Fragment>
  );
};

export default GlobalStyle;
