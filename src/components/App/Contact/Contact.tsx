import React from 'react';

import {
  Card,
  CardContent,
  Chip,
  Typography,
} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
    Grid,
  } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

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

const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        <h1>Contact Us!</h1>
      </Typography>
      <Grid container spacing={6} style={{padding:12}}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>External Sites</h2>
            <a href="www.aa.org">www.aa.org</a><br/>
            <a href="http://area55aa.org/">Link to Area 55 General Services Website</a><br/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>Contact Information</h2><br/>
            Central Office is Currently CLOSED - Emails and regular mail will be received.<br/>
            Toledo Central Office is open Monday through Friday<br/>
            8:00 AM to 4:00 PM  (except holidays)<br/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>
            <h2>Telephone</h2>
            <a href="tel:4193809862">(419) 380-9862  (24 hour service)</a><br/>
            <a href="tel:4193809978">(419) 380-9978  (TTD - for hearing impaired, also fax)</a><br/>
            <h2>Mailing Address</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.508765247977!2d-83.6259015848658!3d41.60150877924506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c783832ea85cd%3A0x87ff42cbddecc80d!2s3328%20Glanzman%20Rd%2C%20Toledo%2C%20OH%2043614!5e0!3m2!1sen!2sus!4v1587484441617!5m2!1sen!2sus" width="600" height="450" aria-hidden="false"/>
            <h2>Electronic Mail</h2>
                General Information: <a href="mailto:toledoaa@accesstoledo.com">Central Office</a><br/>
                Webmaster: <a href="mailto:webmaster@toledoaa.com">Webmaster</a><br/>
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>AA Answer Services in Outlying Areas.</h2> <br/>
            <ul>
                <li><a href="tel:4193521545">(419) 352-1545 Bowling Green, OH</a></li>
                <li><a href="tel:4196255995 ">(419) 625-5995 Fremont, OH</a></li>
                <li><a href="tel:5677102205">(567) 710-2205 Lima, OH</a></li>
                <li><a href="tel:4196255995">(419) 625-5995 Sandusky, OH</a></li>
                <li><a href="tel:7342404844">(734) 240-4844 Monroe, MI</a></li>
                <li><a href="tel:5172653590">(517) 265-3590 Adrian & Tecumseh, MI</a></li>
                <li><a href="tel:8556075223">(855) 607-5223 AlAnon</a></li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;