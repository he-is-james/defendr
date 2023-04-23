import { Button, Typography, Grid, Paper } from '@mui/material'
interface Props {
  name: string
  pronouns: string
  background: string
  properties: string[]
  bond: number
  prompts: string[]
  responses: string[]
}

export default function PersonaMessage({
  name,
  pronouns,
  background,
  properties,
  bond,
  prompts,
  responses,
}: Props) {
  return (
    <div>
      <div className="flex flex-row">
        <Typography variant="h1" fontFamily="Berkshire Swash">
          {name}
        </Typography>
        <Typography variant="h3" fontFamily="Berkshire Swash">
          {pronouns}
        </Typography>
        <Button>instruction</Button>
      </div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={2}
      >
        <Grid item xs={6}>
          <Paper>
            <div>How you know them</div>
            <div>{background}</div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <div>
              <div>Age: {properties[0]}</div>
              <div>Height: {properties[1]}</div>
              <div>Occupation: {properties[2]}</div>
              <div>Location: {properties[3]}</div>
            </div>
            <div>CHANGE CHANGE CHANGE CHANGE to image</div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Paper>Bond: {bond}</Paper>
            <Paper>
              <div>{prompts[0]}</div>
              <div>{responses[0]}</div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <div>{prompts[1]}</div>
            <div>{responses[1]}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
