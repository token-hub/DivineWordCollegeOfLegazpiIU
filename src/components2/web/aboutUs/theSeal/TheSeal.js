import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';
import { images } from '../../data/images';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    imageContainer: {
        padding: '2rem',
    }
});

const TheSeal = () => {

    const {img, alt} = images.logo;

    const {bold, paragraph, imageContainer} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='The seal' banner={AboutUsBannerObj}>
               <Grid container justify='center' className={imageContainer}>
                    <img src={img} alt={alt} />
               </Grid>

               <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}>LICEO DE ALBAY (LDA)</span> was a diocesan schoolentrusted to Fr. Juan Carullo in 1947. Firmly embedded with the gospel message,DUC IN ALTUM, the schoolhad been in active operation for five years when, as a result of the powerful Typhoon Trix hitting the region, its physicalstructurebecame gradually weakened. Consequently theschoolbecame inoperative for six years.
                </Typography>
               <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}>The monstrance</span> and <span className={bold}>six stars</span>signify Christian characteristics in promoting Christ the Savior through the formation of the youth in the Bicol Region by offering a certificate program for teachers for the Provinces of Albay, Sorsogon,Camarines Norte, Camarines Sur, Catanduanes, and Masbate.
                </Typography>
               <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}>The SVD</span> stands for the Society of the Divine Word, which formally took over the management of the Liceo de Albay in 1961. Retaining the same Christian spirit, anchored on the Cross, andenvigoratedby the same dictum DUC IN ALTUM, the school now continues to grow DIVINE WORD COLLEGE OF LEGAZPI. As a college, it has become the source of knowledge and information for Albayanos and students from other provinces in the Bicol Region. It offers various academic programs anchored on theoretical and practical knowledge as reflected by the open book of knowledge, a lighted torch, and the golden rays of academic programs.
                </Typography>
               <Typography variant='subtitle1' className={paragraph}>
                    The unceasing spewing smoke of <span className={bold}>MAYON VOLCANO</span> symbolizes the perseverance and resiliency of the Albayanos as they face various natural calamities.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}>BLUE (pantone 287 C)</span> is the color that dominates the Divinian spirit, often associated with depth and stability. It symbolizes intelligence, faith, truth, heaven and the Divinian core values of excellence, profesionalism, justice, service, peace, and integrity of creation.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}>GRAY (pantone 17-3911 Silver filigrey)</span> is a cool, neutral, and balanced color. It is a formal, conservative, and sophisticated yet timeless and practical color, creating a sense of serenity and tranquility.
                </Typography>


               
            </SharedLayout>
        </Grid>
    )
}

export default TheSeal
