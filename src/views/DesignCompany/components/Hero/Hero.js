import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { Section, HeroSimpleBackground } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
  typed: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroSimpleBackground backgroundImage="/assets/images/shapes/banner-bg.svg">
        <Section narrow>
          <SectionHeader
            title={
              <span>
                Deep as f*** but read as fake!!{' '}
                <TypedText
                  component="span"
                  variant="h2"
                  color="secondary"
                  className={classes.typed}
                  typedProps={{
                    strings: [
                      'Deepfake Detection'
                    ],
                    typeSpeed: 50,
                    loop: false,
                  }}/>
              </span>
                // <Typography color="secondary"  variant="inherit" component="span">Adobe Sensei</Typography>
              // </span>
            }
            titleVariant="h3"
            disableGutter
          />
          <SectionHeader
            subtitle={ <span>We love to explore and identify malicious videos with facial or voice manipulations</span>}
            />
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', width: '100%'}}>
          <Typography
            variant="overline"
            align="center"
            component="p"
            color="primary"
          >
            Kerem Turgutla
          </Typography>
          <Typography
            variant="overline"
            align="center"
            component="p"
            color="primary"
          >
            Dibyajyoti Ghosh
          </Typography>
          <Typography
            variant="overline"
            align="center"
            component="p"
            color="primary"
          >
            Jayant Kumar
          </Typography>
          </div>
        </Section>
      </HeroSimpleBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
