import * as React from 'react';
import {
  Container,
  Card,
  CardActions,
  Typography,
  CardContent,
  IconButton,
  LinearProgress,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import EditIcon from '@mui/icons-material/Edit';
import CameraIcon from '@mui/icons-material/Camera';
import DownloadIcon from '@mui/icons-material/Download';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CollectionsIcon from '@mui/icons-material/Collections';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    marginTop: '8rem',
  },
  content: {
    backgroundColor: '#b5dbf8',
  },
  text: {
    padding: '.2rem',
  },
  strong: {
    fontWeight: '700',
  },

  icon: {
    marginRight: '1rem',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function CardComponent({
  closingDate = '02/03/2022,03:40pm',
  cardName = 'Dashboard',
  completedTask = 1,
  totalTask = 6,
}) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <CardContent className={classes.content}>
          <Typography variant="h6" className={classes.text}>
            <span className={classes.strong}>Card Name</span>: {cardName}
          </Typography>
          <Typography variant="h6" className={classes.text}>
            <span className={classes.strong}>Closing Date</span>: {closingDate}
          </Typography>
          <Typography variant="h6" className={classes.text}>
            <span className={classes.strong}>Status</span>: {completedTask} task
            completed out of {totalTask}
          </Typography>
        </CardContent>
        <LinearProgress
          variant="determinate"
          value={(completedTask / totalTask) * 100}
        />
        <CardActions disableSpacing className={classes.flex}>
          <IconButton aria-label="add to edit" className={classes.icon}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="add to delete" className={classes.icon}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="add to camera" className={classes.icon}>
            <CameraIcon />
          </IconButton>
          <IconButton aria-label="add to collection" className={classes.icon}>
            <CollectionsIcon />
          </IconButton>
          <IconButton aria-label="add to desktop" className={classes.icon}>
            <DesktopWindowsIcon />
          </IconButton>
          <IconButton aria-label="add to download" className={classes.icon}>
            <DownloadIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}

export default CardComponent;
