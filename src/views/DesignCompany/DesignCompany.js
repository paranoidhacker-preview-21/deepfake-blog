import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate, CardBase } from 'components/organisms';
import { colors } from "@material-ui/core";
import { IconText } from 'components/atoms';
import {
  About,
  Features,
  Hero,
  Integrations,
  Pricings,
  Reviews,
  Subscription,
  Categories
} from './components';
import { courseCategories} from './data';
import { integrations, reviews } from './data';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { IconAlternate, SectionHeader } from "components/molecules";
import { CardReview } from 'components/organisms';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  hero: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-9),
    },
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 100%, ${theme.palette.background.paper} 0%)`,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
    },
  },
  reviewSection: {
    background: theme.palette.secondary.main,
  },
  sectionSubscription: {
    paddingTop: 0,
  },
}));

const DesignCompany = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="medium-widget"></div>
      {/* <div style={{width: '100%', margin: '0 auto', padding: '0px 16px', maxWidth: '1140px', minHeight:"74px"}}></div> */}
      <Hero data-aos="fade-up" className={classes.hero} />
        <div style={{width:'100%', padding:'40px', display:'flex'}}>
          <div style={{marginRight: '20px', minWidth: '280px'}}>
            <TwitterTweetEmbed tweetId={'1137797443943145473'}/>
            <TwitterTweetEmbed tweetId={'1137797443943145473'}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginBottom: '10px', marginRight: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '21px'}}>
              <div>
              <CardBase liftUp withShadow>
                <SectionHeader
                  title={
                    <span style={{fontSize:"26px"}}>
                      <Typography  component="span" variant="inherit" color="primary">
                      You thought fake news was bad?
                      </Typography>{' '}
                      Deep fakes are where truth goes to die!!{' '}
                    </span>
                  }
                  subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
                />
              </CardBase>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
            <div>
            <div className='player-wrapper' style={{height:'558px', width:"990px"}}>
              <ReactPlayer
                url='https://youtu.be/cQ54GDm1eL0'
                className='react-player'
                playing
                width='100%'
                height='100%'
              />
            </div>
            </div>
            <div>




            </div>
            </div>
          </div>
          <div style={{ minWidth: '280px'}}>
          <TwitterTweetEmbed tweetId={'1218012589579472896'}/>
            <TwitterTweetEmbed tweetId={'1137797443943145473'}/>
          </div>
        </div>
      <Section className={classes.sectionNoPaddingTop}>
        <Categories data={courseCategories}/>
      </Section>
      <Section>
        <Integrations data={integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>
      <Section narrow>
        <Pricings />
      </Section>
      <Section className={classes.sectionSubscription}>
        <Subscription data-aos="fade-up" />
      </Section>
      <Divider />
    </div>
  );
};

export default DesignCompany;
