export default theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    fontWeight: 300
  },
  table: {
    backgroundColor: theme.palette.primary.main,
    '& th': {
      borderColor: 'rgba(255, 255, 255, 0.4)'
    },
    '& td': {
      padding: theme.spacing(2)
    }
  },
  tableHead: {
    display: 'none'
  },
  mobileTrackInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  mobileTrackInfo__title: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '.5px',
    marginBottom: '5px'
  },
  mobileTrackInfo__artist_album: {
    '& span': {
      display: 'inline-block'
    }
  },
  separator: {
    marginRight: '5px',
    marginLeft: '5px'
  },
  desktopTrackInfo: {
    display: 'none'
  },
  // Styling for tablet and up
  [theme.breakpoints.up('sm')]: {
    tableHead: {
      display: 'table-header-group'
    },
    mobileTrackInfo: {
      display: 'none'
    },
    desktopTrackInfo: {
      display: 'table-cell'
    }
  }
});
