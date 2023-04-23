import React, { useState } from 'react'
import { Button, Modal, Typography, Grid } from '@mui/material'
import Image from 'next/image'
interface InstructionsPopupProps {
  isOpen: boolean
  onClose: () => void
}
import page1 from '/public/1.svg'
import page2 from '/public/2.svg'
import page3 from '/public/3.svg'
import page4 from '/public/4.svg'

const InstructionsPopup: React.FC<InstructionsPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleNextPage = () => setCurrentPage(currentPage + 1)
  const handlePrevPage = () => setCurrentPage(currentPage - 1)

  const handleClose = () => {
    setCurrentPage(1)
    onClose()
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <Image src={page1} alt="page 1"></Image>
          </>
        )
      case 2:
        return (
          <>
            <Image src={page2} alt="page 2"></Image>
          </>
        )
      case 3:
        return <Image src={page3} alt="page 3"></Image>
      case 4:
        return <Image src={page4} alt="page 4"></Image>
      default:
        return null
    }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 600,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Grid
        sx={style}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid>
          <Typography variant="h3" fontFamily="Berkshire Swash">
            Instructions
          </Typography>
        </Grid>
        <Grid>{renderPage()}</Grid>
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextPage}
            disabled={currentPage === 4}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default InstructionsPopup
