import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {dwclLogo} from '../../../assets/images';
import {banners, navlinks} from '../../../data/web';
import {
    Paragraph,
    BoldSpan
} from '../../../components/atoms/web';

const History = () => {
    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='The Seal' banner={banners.AboutUsBannerObj}>
            
            <Grid container justify='center' style={{ padding:'2rem' }}>
                <img src={dwclLogo} alt='DWCL Logo' />
            </Grid>

            <Paragraph align='justify'>
                <BoldSpan>LICEO DE ALBAY (LDA)</BoldSpan> was a diocesan schoolentrusted to Fr. Juan Carullo in 1947. Firmly embedded with the gospel message,DUC IN ALTUM, the schoolhad been in active operation for five years when, as a result of the powerful Typhoon Trix hitting the region, its physicalstructurebecame gradually weakened. Consequently theschoolbecame inoperative for six years.
            </Paragraph>
            <Paragraph align='justify'>
                <BoldSpan>The monstrance</BoldSpan> and <BoldSpan>six stars</BoldSpan>signify Christian characteristics in promoting Christ the Savior through the formation of the youth in the Bicol Region by offering a certificate program for teachers for the Provinces of Albay, Sorsogon,Camarines Norte, Camarines Sur, Catanduanes, and Masbate.
            </Paragraph>
            <Paragraph align='justify'>
                <BoldSpan>The SVD</BoldSpan> stands for the Society of the Divine Word, which formally took over the management of the Liceo de Albay in 1961. Retaining the same Christian spirit, anchored on the Cross, andenvigoratedby the same dictum DUC IN ALTUM, the school now continues to grow DIVINE WORD COLLEGE OF LEGAZPI. As a college, it has become the source of knowledge and information for Albayanos and students from other provinces in the Bicol Region. It offers various academic programs anchored on theoretical and practical knowledge as reflected by the open book of knowledge, a lighted torch, and the golden rays of academic programs.
            </Paragraph>
            <Paragraph align='justify'>
                The unceasing spewing smoke of <BoldSpan>MAYON VOLCANO</BoldSpan> symbolizes the perseverance and resiliency of the Albayanos as they face various natural calamities.
            </Paragraph>
            <Paragraph align='justify'>
                <BoldSpan>BLUE (pantone 287 C)</BoldSpan> is the color that dominates the Divinian spirit, often associated with depth and stability. It symbolizes intelligence, faith, truth, heaven and the Divinian core values of excellence, profesionalism, justice, service, peace, and integrity of creation.
            </Paragraph>
            <Paragraph align='justify'>
                <BoldSpan>GRAY (pantone 17-3911 Silver filigrey)</BoldSpan> is a cool, neutral, and balanced color. It is a formal, conservative, and sophisticated yet timeless and practical color, creating a sense of serenity and tranquility.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default History
