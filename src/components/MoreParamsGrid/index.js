import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import IconCard from 'components/IconCard'
import { Typography, CardContent } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

export default function MoreParamsGrid(props) {
  const { pool } = props

  let activeText

  if (pool.poolParams.isPaused) {
    activeText = 'No'
  } else {
    activeText = 'Yes'
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Pool Details</Typography>
              <Typography variant="body1">{`Manager    : ${pool.poolParams.manager}\n`}</Typography>
              <Typography variant="body1">{`Swap Fee: ${pool.poolParams.swapFee}\n`}</Typography>
              <Typography variant="body1">{`Exit Fee: ${pool.poolParams.exitFee}\n`}</Typography>
              <Typography variant="body1">{`Token Count: ${pool.poolParams.numTokens}\n`}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
