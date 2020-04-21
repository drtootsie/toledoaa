import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        <h1>Home</h1>
      </Typography>
      <Grid container spacing={6} style={{padding:12}}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>Updates</h2>
              <a href="../Documents/Cancellations-April-06.htm">Following Meetings are cancelled until April 13th</a><br/>
              <a href="../Documents/Central-Office-Announcements-April-2020.htm">April Announcements</a><br/>
              <a href="../Documents/Central-Office-Announcements-March-2020.htm">March Announcements</a><br/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>I Am Responsible</h2><br/>
            Whenever anyone, anywhere, reaches out for help, I want the hand of AA always to be there.  And for that, I am responsible.<br/>
            Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism.<br/>
            The only requirement for membership is a desire to stop drinking.<br/>
            There are no dues or fees for membership: we are self-supporting through our own contributions.<br/>
            AA is not allied with any sect, denomination, politics, organization or institution, does not wish to engage in any controversy, neither endorses or opposes any causes.<br/>
            Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.<br/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <h2>Current List of Meetings</h2>
          <Card>
              <CardMedia component="iframe"
                          src="https://docs.google.com/spreadsheets/d/1DQZZlIfP91uhmyB-IY2cfrTJ75zqRJ83PjMlqKexw-E/edit#gid=0"
                          height="600"/>
            </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Our website is primarily designed to provide the latest meeting schedule information for Northwestern Ohio and Southeastern Michigan.</h2> <br/>
            <h3>If you would like to contribute to Area 55 Central Office:</h3><br />
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="toledoaa2017@outlook.com" />
              <input type="hidden" name="item_name" value="Donations" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form> <br />
            Cash App is $toledoaaco<br />
            Please make checks payable to Central Office<br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;