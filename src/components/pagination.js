import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded({changePage}) {
    const [selectedPage, setSelectedPage] = useState(1)
  const classes = useStyles();

  const handlePageChange = (event, value) => {
    setSelectedPage(value)
    changePage(value)
}
  return (
    <div className={classes.root}>
      
      <Pagination count={5} page={selectedPage} onChange={handlePageChange} variant="outlined" shape="rounded" color='secondary' />
    </div>
  );
}