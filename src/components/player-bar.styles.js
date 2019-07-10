export default theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  songInfo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  toolbar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& [data-size="large"] svg': {
      height: theme.spacing(5),
      width: theme.spacing(5)
    }
  },
  progressBarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '5px'
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.palette.secondary.light
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: theme.spacing(2)
    }
  }
});
