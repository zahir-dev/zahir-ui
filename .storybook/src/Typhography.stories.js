import React from "react";
import Typography from 'zahir-ui/Typography';
import Grid from 'zahir-ui/Grid';


export default {
    component: Typography,
    title: 'Components/Typography',
};

const props = {
    variant: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
    ],
    scale: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
    ],
    weight: [
        'regular',
        'semi-bold',
        'bold',
        'extra-bold',
        'black'
    ],
    color: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
    ]
}

export const variant = () => (
    <Grid container spacing={2}>
        {
            props.variant.map(item => (
                <Grid item xs={12}>
                    <Typography color="textPrimary" variant={item}>
                        {item}
                    </Typography>
                </Grid>
            ))
        }
    </Grid>
);

export const scale = () => (
    <Grid container spacing={2}>
        {
            props.scale.map(item => (
                <Grid item>
                    <Typography color="textPrimary" scale={item}>
                        {item}
                    </Typography>
                </Grid>
            ))
        }
    </Grid>
);

export const color = () => (
    <Grid container spacing={2}>
        {
            props.color.map(item => (
                <Grid item>
                    <Typography color={item}>
                        {item}
                    </Typography>
                </Grid>
            ))
        }
    </Grid>
);

export const weight = () => (
    <Grid container spacing={2}>
        {
            props.weight.map(item => (
                <Grid item>
                    <Typography color="textPrimary" weight={item}>
                        {item}
                    </Typography>
                </Grid>
            ))
        }
    </Grid>
);