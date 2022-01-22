import * as React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    footerBar: {
        position: "fixed",
        bottom: 0,
        width: "75%",
        backgroundColor: "#1976d2",
        paddingLeft: "10px",
        color: "white",
        boxShadow: "1px 0px 20px 5px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerBar} >
            <p>Copyright © 2022 Paras. All rights reserved.</p>
        </div>
    );
};
export default Footer;
