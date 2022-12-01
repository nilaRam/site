import CardModel from './card-model'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Badge,
  Link,
  Text
} from 'theme-ui'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Buttons from './button'

/** @jsxImportSource theme-ui */

export default function Workshops({ data }) {
  const [workshop, setWorkshop] = useState('Splatter Paintv')
  const [workshopSlug, setWorkshopSlug] = useState('')

  // function New() {
  //   let rand = Math.floor(Math.random() * data.length - 2)

  //   setWorkshop(
  //     data[rand].name
  //       .replace('.js', '')
  //       .replace(/[-]/g, ' ')
  //       .replace(/[_]/g, ' ')
  //       .replace('.', '')
  //       .replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())
  //   )

  //   setWorkshopSlug(data[rand].name)
  // }

  // console.log(data[Math.floor(Math.random() * data[0].length)])
  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: 'elevated',
        background:
          'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)'
      }}
      // github_link="https://github.com/hackclub/workshops"
    >
      <Text variant="title">Workshops</Text>
      <Grid columns={[1]}>
        <Box>
          <Text as="p" variant="subtitle">
            A collection of community-contributed, self-guided coding tutorials
            + ideas. Learn to code by building, one project at a time.
          </Text>
          <Text as="p" sx={{ fontSize: [2, 3], fontWeight: 'bold', mt: 2 }}>
            Get involved
          </Text>
          <Flex sx={{ flexDirection: 'column' }}>
            <Buttons content="more 222" id="13">
              Write and submit a workshop
            </Buttons>
            <Buttons content="more info" id="14">
              Follow a workshop and build a project
            </Buttons>
          </Flex>
          {/* <ul sx={{ mt: 0, fontSize: [2, 3] }}>
            <li>
              <Link
                href="https://editor.sprig.hackclub.com"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                Write and submit a workshop
              </Link>
            </li>
            <li>
              <Link
                href="/slack"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                Build a project with a workshop
              </Link>
            </li>
          </ul> */}
          <Button
            variant="lg"
            sx={{
              background: 'white',
              color: 'blue',
              mt: 3
            }}
          >
            Find workshops
          </Button>
        </Box>
        <Fade spy={workshop} bottom>
          <Text
            // onClick={New}
            sx={{
              '&:hover': { cursor: 'pointer' },
              float: 'right',
              mt: '-20px'
            }}
          >
            Click for random workshop: {workshop} 👀
          </Text>
        </Fade>
      </Grid>
    </CardModel>
  )
}
