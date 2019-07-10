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
    paddingBottom: theme.spacing(1)
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    '& [data-size="large"] svg': {
      height: theme.spacing(5),
      width: theme.spacing(5)
    }
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: theme.spacing(2)
    }
  }
});
