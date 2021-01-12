import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Image} from '../../../components/atoms/web';
import {orgChart} from '../../../assets/images';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgContainer: {
        height: '100%',
        width: '100%',
    },
});
const OrganizationalStructure = () => { 

    const {imgContainer} = useStyles();
    const {img, alt} = orgChart;

    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='Organizational Structure' banner={banners.AboutUsBannerObj}>
            <Grid container justify='center' className={imgContainer}>
                <Image source={img} alt={alt}/>
            </Grid>
        </BaseWithBannerAndOverview>
    )
}

export default OrganizationalStructure
