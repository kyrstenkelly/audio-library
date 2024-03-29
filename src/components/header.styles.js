export default theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main
  }
});
