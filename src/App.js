import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Button, createMuiTheme, Grid, MuiThemeProvider, Paper} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {blue, lightBlue, lime, red} from "@material-ui/core/colors";
import {getDate} from "date-fns";

const defaultMaterialTheme = createMuiTheme({
    TextField: {
        border: '1px solid blue'
    },
    palette: {
        primary: blue,
        secondary: blue
    },
    input: {
        color: '#ffffff',
    },
    MuiOutlinedInput: {
        root: {
            '&:hover': {
                border: '10px solid red !important', // i'm struggling with this :/
            },
        },
    },
});

function App() {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date(Date.now()));
    const [selectedEndDate, setSelectedEndDate] = useState(new Date(Date.now()));
    const [counter, setCounter] = useState(0);

    const handleStartChange = (date) => {
        setSelectedStartDate(date);
    };

    const handleEndDate = (date) => {
        setSelectedEndDate(date);
    };

    const countDate = () => {
        // Discard the time and time-zone information.
        let Date1 = new Date(selectedStartDate);
        let Date2 = new Date(selectedEndDate);

        let timeDiff = Date2.getTime() - Date1.getTime();

        setCounter(Math.round(timeDiff /(1000 * 3600 * 24)));
    }

    return (
            <div className="App">
                <Paper elevation={10} style={{margin: 'auto', height: '50vh', width: '20%', minWidth: '300px', padding: '30px'}}>
                    <h1 style={{margin: 'auto', textAlign: 'center'}}>Days counter</h1>
                    <Grid container style={{textAlign:'center', margin: 'auto', height: '100%', padding: '20px'}}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={12}>
                                <MuiThemeProvider theme={defaultMaterialTheme}>
                                    <KeyboardDatePicker
                                        style={{textEmphasisColor: 'white'}}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Start date"
                                        value={selectedStartDate}
                                        onChange={handleStartChange}
                                    />
                                </MuiThemeProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <MuiThemeProvider theme={defaultMaterialTheme}>
                                    <KeyboardDatePicker
                                        style={{textEmphasisColor: 'white'}}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="End date"
                                        value={selectedEndDate}
                                        onChange={handleEndDate}
                                    />
                                </MuiThemeProvider>
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Grid item xs={12}>
                            <h2> Days between: {counter}</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={countDate} variant="contained">
                                Calculate
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
  );
}

export default App;
