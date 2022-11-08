import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Head from 'next/head'


import Water from '../component/water'
import Base from '../component/base'
import Clould from '../component/clould'


export default function Home() {
  return (
    <div >
      <Head>
        <title>KratongDay</title>
        <meta name="description" content="KratongDay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Grid
          container
          direction="row">
          <Grid
            item xs={12}
            sx={{
              width: '100%',
              height: '20vh',
              top: 0,
            }}>
            <Clould />
          </Grid>
          <Grid
            item xs={12}
            sx={{
              width: '100%',
              height: '50vh',
            }}>
            <Water />
          </Grid>
          <Grid
            item xs={12}
            sx={{
              width: '100%',
              height: '30vh',
            }}>
            <Base />
          </Grid>
        </Grid>
      </>
    </div>
  )
}
