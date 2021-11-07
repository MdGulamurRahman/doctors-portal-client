import { Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../Shared/Calender/Calender';
import AppointDash from '../AppointDash/AppointDash';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
            <Calender
              date={date}
              setDate={setDate}
            ></Calender>
        </Grid>
        <Grid item xs={12} md={7}>
           <AppointDash date={date}></AppointDash>
        </Grid>
        
        </Grid>
    );
};

export default DashboardHome;