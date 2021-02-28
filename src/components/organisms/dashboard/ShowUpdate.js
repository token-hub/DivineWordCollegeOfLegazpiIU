import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Paragraph} from '../../atoms/dashboard';
import {stringTransform, formatDate} from '../../../helpers';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainContent: {
        margin: '1.5rem 0',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    content: {
        padding: '0 2rem',
        width: '100%',
    },
    footer: {
        padding: '0 2rem',
    }
});

const ShowUpdate = ({data: {title, category, from = null, to = null, posted_at, main}}) => {
    
    const {header, mainContent, content, footer} = useStyles();
    
    return (
        <div>
            <div className={header}>
                <Paragraph variant='h6'>{stringTransform(category, '-', ' ')}</Paragraph>
                <Paragraph >{title.toUpperCase()}</Paragraph>
                {category == 'news-and-events' && <Paragraph ><small>{`${formatDate(from)} - ${formatDate(to)}`}</small></Paragraph>}
            </div>
            <div className={mainContent}>
                <div className={content}>
                    {main}
                </div>
            </div>
            <Paragraph className={content}>{`Posted : ${posted_at}`}</Paragraph>
        </div>
    )
}

export default ShowUpdate
