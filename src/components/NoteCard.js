import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import NearMeOutlinedIcon from '@material-ui/icons//NearMeOutlined';
import Container from '@material-ui/core/Container'

import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == 'ComputerVision') {
        return yellow[700]
      }
      if (note.category == 'Similarity') {
        return green[500]
      }
      if (note.category == 'Classification') {
        return pink[500]
      }
      return blue[500]
    },
  }
})

export default function NoteCard({ note }) {
    
  const classes = useStyles(note)
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()+note.category[1].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => openInNewTab(note.link)}>
              <NearMeOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}