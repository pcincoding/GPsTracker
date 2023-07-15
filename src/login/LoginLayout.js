import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';
// import LogoImage from './LogoImage'; && <LogoImage color={theme.palette.secondary.contrastText} />

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  // sidebar: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   background: '#dd6b3f',
  //   paddingBottom: theme.spacing(5),
  //   width: theme.dimensions.sidebarWidth,
  //   [theme.breakpoints.down('lg')]: {
  //     width: theme.dimensions.sidebarWidthTablet,
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     width: '0px',
  //   },
  // },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.up('lg')]: {
      // padding: theme.spacing(0, 25, 0, 0),
      background: 'url(../telemkotrack_bg.jpg) ',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('sm')]: {
      // padding: theme.spacing(0, 25, 0, 0),
      background: 'url(../telemkotrack_bg.jpg) ',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(0, 25, 0, 0),
      background: 'url(../telemkotrack_bg.jpg) ',
      backgroundSize: 'cover',
    },
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down('lg')) }
      </div>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;