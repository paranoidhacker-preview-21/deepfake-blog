import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { SectionHeader, DescriptionCta } from 'components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
  typed: {
    fontWeight: 700,
  },
}));

const Application = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Keep your job applications organized and up to date"
        subtitle="TheFront centralizes all your job applications, resumes, and work, whether they're from our platform or through another site or service."
        fadeUp
        align="left"
      />
      <DescriptionCta
        title="Apply in 15 minutes"
        subtitle="Get your dream job without the hassle."
        primaryCta={
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        }
        secondaryCta={
          <Button variant="contained" color="primary" size="large">
            Apply now
          </Button>
        }
        align={'left'}
      />
    </div>
  );
};

Application.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Application;
