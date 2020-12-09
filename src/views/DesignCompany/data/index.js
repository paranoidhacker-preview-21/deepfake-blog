import { colors } from '@material-ui/core';

export const integrations = [
  {
    logo: '/assets/images/logos/slack.svg',
    name: 'Slack',
  },
  {
    logo: '/assets/images/logos/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    logo: '/assets/images/logos/dropbox.svg',
    name: 'Dropbox',
  },
  {
    logo: '/assets/images/logos/google-drive.svg',
    name: 'Google Drive',
  },
  {
    logo: '/assets/images/logos/google-ad-manager.svg',
    name: 'Google Ad Manager',
  },
  {
    logo: '/assets/images/logos/atlassian.svg',
    name: 'Atlassian',
  },
];

export const reviews = [
  {
    authorPhoto: {
      src: '/assets/images/photos/people/veronica-adams.jpg',
      srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x',
    },
    authorName: 'Veronica Adams',
    authorOccupation: 'Growth Marketer, Crealytics',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorPhoto: {
      src: '/assets/images/photos/people/akachi-luccini.jpg',
      srcSet: '/assets/images/photos/people/akachi-luccini@2x.jpg 2x',
    },
    authorName: 'Akachi Luccini',
    authorOccupation: 'Lead Generation, Alternative Capital',
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    authorPhoto: {
      src: '/assets/images/photos/people/jack-smith.jpg',
      srcSet: '/assets/images/photos/people/jack-smith@2x.jpg 2x',
    },
    authorName: 'Jack Smith',
    authorOccupation: 'Head of Operations, Parkfield Commerce',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const courseCategories = [
  {
    color: colors.indigo,
    icon: 'fas fa-video',
    title: 'Video Deepfake Detection',
    subtitle: 'Detect identities in a video with clustering, and detect which identities are fake.',
  },
  {
    color: colors.deepOrange,
    icon: 'fas fa-bullhorn',
    title: 'Speech Deepfake Detection',
    subtitle: 'Detect identifies discern between real and fake audio examples.',
  },
  {
    color: colors.purple,
    icon: 'fas fa-bullhorn',
    title: 'Speech 2 text',
    subtitle: 'Converts the speech to text'
  },
  {
    color: colors.amber,
    icon: 'fas fa-book-open',
    title: 'Text Deepfake Detection',
    subtitle: 'Detect identifies Toxicity and GLTR Misinformation.',
  }
];
