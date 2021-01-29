import React, {useState} from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {pdfs} from '../../../assets/pdfs';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme =>({
    root: {
        marginBottom: '2rem',
        boxSizing: 'borderBox'
    },
   pdfContainer: {
    height: '38rem',
    overflow: 'scroll',
    overflowX: 'hidden', 
    width: '60%',
    margin: 0,
    margin: '2rem auto',
    "& canvas": {
        width: '100% !important',
    },
    [theme.breakpoints.down('xs')]:{
        width: '75%',
        height: '30rem'
    },
    header: {
        marginLeft: '1rem',
        fontWeight: 900
    }
   },
}));

const ResearchPdf = ({ pdf = null }) => {

    const {pdfContainer, header, root} = useStyles();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const isExist = Object.keys(pdfs).filter( pdfTitle => pdfTitle === pdf).length > 0;

    return (
        <div className={root}>
            {isExist 
                ?   <>
                        <Typography variant='h4' color='primary' style={{ marginLeft: '2rem'}}>{pdf}</Typography>
                        <Document
                            file={pdfs[pdf]}
                            onLoadSuccess={onDocumentLoadSuccess}
                            style={{ overflow: 'hidden' }}
                            >
                            {/* <Page pageNumber={pageNumber} /> */}
                            <Grid container justify='center' className={pdfContainer}>
                            {Array.apply(null, Array(numPages))
                                .map((x, i)=>i+1)
                                .map((page, index) => <Page key={index} pageNumber={page}/>)}
                            </Grid>
                        </Document>
                    </>  
                : <Typography variant='h5' color='primary' className={header}><strong>Research title not found.</strong></Typography>
            }
        </div>
    )
}

export default ResearchPdf
