import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: 'url(../telemkotrack_bg.jpg)',
    backgroundSize: 'cover',
  },
  Title: {
    color: 'red',
    fontSize: '48px',
    fontFamily: 'Cooper Black',
    margin: '20px 0 -25px 20px',
  },
  monitoring: {
    color: 'black',
    letterSpacing: '6px',
    fontWeight: 'bold',
    fontSize: '11px',
    marginLeft: '20px',
  },
  forform: {
    position: 'absolute',
    top: '200px',
    left: '20px',
  },
  heading: {
    color: 'blue',
    fontSize: '30px',
  },
  formgroup: {
    fontSize: '20px',
    marginBottom: '-20px',
  },
  formcontrol: {
    padding: '5px 25px',
  },
  btn: {
    fontSize: '15px',
    padding: '5px 20px',
    borderRadius: '8px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    marginLeft: '20px',
  },
}));
// eslint-disable-next-line
export default function ForgetPass() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.Title}>Telemko</h1>
      <p className={classes.monitoring}>MONITORING ASSETS</p>
      <form onSubmit={handleSubmit} className={classes.forform}>
        <h2 className={classes.heading}>Forgot Password</h2>
        <div className={classes.formgroup}>
          Email
        </div>
        <br />
        <input type="email" className={classes.formcontrol} placeholder="Enter your email" />
        <button type="button" className={classes.btn}>Submit</button>
      </form>
    </div>
  );
}
