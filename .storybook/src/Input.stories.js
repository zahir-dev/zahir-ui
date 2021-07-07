import React from "react";
import Input from 'zahir-ui/Input';
import Grid from 'zahir-ui/Grid';

export default {
    component: Input,
    title: 'Components/Input',
};


export const type = () => (
    <Grid container spacing={2}>
        {
            ['text', 'email', 'password'].map(item => (
                <Grid item>
                    <Input
                        name="phone"
                        type={item}
                        placeholder={`e.g. ${item}`}
                    />
                </Grid>
            ))
        }
    </Grid>
);


export const label = () => (
    <Input 
        label="Email"
    />
)