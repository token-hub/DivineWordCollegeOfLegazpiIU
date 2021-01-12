import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Image} from '../../atoms/web';
import { makeStyles } from '@material-ui/core/styles';
import {Paragraph} from '../../../components/atoms/web';

const useStyles = makeStyles({
    marginBottom: {
        marginBottom: '1.5rem'
    },
    imageContainer: {
        maxHeight: '100%',
        width: '100%', 
    },
    paragraph: {
        margin: '1rem 0',
        padding: '0 1rem',
    },
    description: {
        margin: '1rem 0',
        padding: '0 1rem',
    },
});
const ImageWithParagraph = ({title, name, jobDescription, image }) => {

    const {marginBottom, imageContainer, description} = useStyles();

    const {img, alt} = image;

    return (
        <Grid container className={marginBottom}>
            <Grid item md={4} className={imageContainer}>
               <Image source={img} alt={alt} />
            </Grid>
            <Grid item md={8} className={description}>
                <Paragraph bold>{title}</Paragraph>
                <Paragraph>{name}</Paragraph>
                <Paragraph align='justify'>{jobDescription}</Paragraph>
            </Grid>
        </Grid>
    )
}

export default ImageWithParagraph
