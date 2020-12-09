import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import { CardBase } from 'components/organisms';
import ReactPlayer from 'react-player'
const useStyles = makeStyles(theme => ({
  root: {},
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
            You thought fake news was bad?
            </Typography>{' '}
            Deep fakes are where truth goes to die!!{' '}
          </span>
        }
        subtitle={
          <span> Our mission is to determine the legitimacy of information presented online, mainly used maliciously as a source of misinformation, manipulation, harassment, persuation and many more...
       </span>
       }
        // ctaGroup={[
        //   <Button color="primary" variant="contained" size="large">
        //     Click to Run Sensei Deepfake Analyzer on Subject
        //   </Button>
        // ]}
        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Image
                className={classes.playIcon}
                src="/assets/images/illustrations/play-icon.svg"
                alt="Play Video"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container justify="center">
              <div className='player-wrapper' style={{height:'550px', width:"100%"}}>
              <ReactPlayer
                url='https://youtu.be/cQ54GDm1eL0'
                className='react-player'
                playing
                width='100%'
                height='100%'
              />
            </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
