import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Box, Button, TextareaAutosize }
    from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';

import './register.scss';
// import ErrorMessage from './ErrorMessage';

const Register = (props) => {
    return (
        <div>

            <Container maxWidth="sm">
                
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12}>
                        <Box boxShadow={3} className="form-root">
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                color="secondary"
                                className="username"
                                fullWidth={true}
                                
                            />

                            <div style={{ color: 'red' }}></div>


                            <TextField
                                id="password"
                                label="E-mail"
                                variant="outlined"
                                color="secondary"
                                className="username"
                                fullWidth={true}
                               />
                            <div style={{ color: 'red' }}></div>

                            <TextField
                                id="password"
                                label="password"
                                variant="outlined"
                                color="secondary"
                                className="username"
                                fullWidth={true}
                                />
                            <div style={{ color: 'red' }}></div>

                            <TextField
                                id="password"
                                label="Repassword"
                                variant="outlined"
                                color="secondary"
                                className="username"
                                fullWidth={true}
                               />
                            <div style={{ color: 'red' }}></div>

                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth={true}
                                // onChange={toDatayDate}
                            />

                            <div>
                                <div className="person-gen">GENDER</div>
                                <div>
                                    <span>Male</span>
                                    <input type="radio"
                                        value="gen"
                                        name="check1"
                                    //   checked={userGender === 'male' ? true : false}
                                    // onChange={checkOne}
                                    />

                                    <span>Fe-male</span>
                                    <input type="radio"
                                        value="gen"
                                        name="check1"
                                    //   checked={userGender === 'male' ? false : true}
                                    // onChange={checkTwo} 
                                    />

                                </div>
                            </div>

                            <Grid className="action-bar" container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type="button">
                                        Sing UP
                            </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}


export default Register;