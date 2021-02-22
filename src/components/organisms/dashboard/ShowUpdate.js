import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Paragraph} from '../../atoms/dashboard';
import {stringTransform} from '../../../helpers';

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
        width: '95%',
    }
});

const ShowUpdate = ({data: {title, category, from = null, to = null, posted_at, main}}) => {
    
    const {header, mainContent, content} = useStyles();
    
    return (
        <div>
            <div className={header}>
                <Paragraph variant='h6'>{stringTransform(category, '-', ' ')}</Paragraph>
                <Paragraph >{title.toUpperCase()}</Paragraph>
                {category == 'news-and-events' && <Paragraph ><small>{`${from} - ${to}`}</small></Paragraph>}
            </div>
            <div className={mainContent}>
                <div className={content}>
                    {main}
                </div>
            </div>
            <Paragraph >{`Posted : ${posted_at}`}</Paragraph>
        </div>
    )
}

export default ShowUpdate
