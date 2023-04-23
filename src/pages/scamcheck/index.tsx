import { Button, TextField, Typography, Paper, Grid } from '@mui/material'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import LinearWithValueLabel from '@/components/progressbar'
const cohere = require('cohere-ai') // This is your trial API key
cohere.init('cnZkaLE1YQ3LHQHqaYPKxkhiVWEmkgVMYqlq0CZu')

export default function ScamCheck() {
  const [text, setText] = useState('')
  const [confidence, setConfidence] = useState(0)
  const [prediction, setPrediction] = useState('')
  const runCohere = async (input: string) => {
    const response = await cohere.classify({
      model: 'large',
      inputs: [input],
      examples: [
        { text: "I don't know this person", label: 'This is a scam' },
        { text: 'Give me money now', label: 'This is a scam' },
        { text: 'I need money', label: 'This is a scam' },
        { text: 'Click this link for a free item', label: 'This is a scam' },
        { text: "Let's hang out sometime!", label: 'This is not a scam' },
        { text: 'Emailed me asking for money', label: 'This is a scam' },
        { text: 'Texted me a weird link', label: 'This is a scam' },
        { text: 'Texted me normally', label: 'This is not a scam' },
        { text: 'Sent a professional email', label: 'This is not a scam' },
        { text: 'I love this person', label: 'This is not a scam' },
        { text: 'I trust this person', label: 'This is not a scam' },
        { text: 'Please check my homework for me', label: 'This is not a scam' },
        { text: 'Can you fill out this when2meet', label: 'This is not a scam' },
        {
          text: 'Please take this quick survey for a chance to win a prize',
          label: 'This is a scam',
        },
      ],
    })
    console.log(
      `The confidence levels of the labels are ${JSON.stringify(
        response.body.classifications[0]
      )}`
    )
    setConfidence(response.body.classifications[0].confidence * 100)
    setPrediction(response.body.classifications[0].prediction)
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col space-y-52">
        <Grid className="align-center justify-center flex-col h-3/5 flex w-3/5">
          <Typography
            className="h-1/4 text-center"
            variant="h1"
            fontFamily="Berkshire Swash"
          >
            ScamShield(tm)
          </Typography>
          <Typography
            className="h-1/4 text-left"
            variant="h5"
            fontFamily="Open Sans"
          >
            Skeptical of a scam but not too confident? Look up a current situation or
            describe a hypothetic scenario below, and ScamShield will evaluate the
            likelihood of it being a scam! (Ex. A stranger texted me with a weird
            link...is this a scam?)
          </Typography>
          <TextField
            multiline
            className="h-1/3"
            rows={6}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
          <Button
            className="bg-black mb-4"
            variant="contained"
            onClick={() => {
              runCohere(text)
            }}
          >
            submit entry
          </Button>
          <LinearWithValueLabel value={confidence}></LinearWithValueLabel>
          {confidence === 0 ? (
            <div></div>
          ) : (
            <Typography className="text-center" variant="h4" fontFamily="Open Sans">
              {prediction} with {confidence}% confidence
            </Typography>
          )}
        </Grid>
      </div>
    </div>
  )
}
