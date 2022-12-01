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
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import BGImg from '../components/background-image'
import ForceTheme from '../components/force-theme'
import Footer from '../components/footer'
import FooterImgFile from '../public/home/footer.png'
import Stage from '../components/stage'
import devtools from '../node_modules/devtools-detect/index.js'
import Carousel from '../components/carousel'
import Sprig from '../components/cards/sprig'
import Sinerider from '../components/cards/sinerider'
import SprigConsole from '../components/cards/sprig-console'
import Clubs from '../components/cards/clubs'
import Workshops from '../components/cards/workshops'
import Bank from '../components/cards/bank'
import FormData from 'form-data'
import Epoch from '../components/cards/epoch'
import Hackathons from '../components/cards/hackathons'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import Inspect from '../components/inspect'
import AssembleImgFile from '../public/home/assemble.jpg'

let Highlight = styled(Text)`
  color: inherit;
  border-radius: 1em 0 1em 0;
  background: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`
Highlight = Highlight.withComponent('mark')

const rollout = keyframes`
0% {
  transform: translateY(-100px);
}
100% {
  transform: translateY(0);
}
`

// function SlackNum({slackData}) {
//   let [key, setKey] = useState()
//   useEffect(() => {
//     return SlackNum =
//        <Text sx={{ animation: `.4s ${rollout}` }} key={Math.random()}>
//          {
//            slackData.stats.sort((a, b) => a.ds - b.ds).reverse()[0]
//              .total_members_count
//          }
//        </Text>
//    }, slackData)

//    return(
//      <></>
//    )
// }

function Page({
  hackathonsData,
  bankData,
  slackData,
  stars
  // workshops
}) {
  let [key, setKey] = useState(0)
  let [key1, setKey1] = useState(0)

  const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if it's open
      console.log('Is DevTools open:', devtools.isOpen)

      // Check it's orientation, `undefined` if not open
      console.log('DevTools orientation:', devtools.orientation)

      // Get notified when it's opened/closed or orientation changes
      window.addEventListener('devtoolschange', event => {
        console.log('Is DevTools open:', event.detail.isOpen)
        console.log('DevTools orientation:', event.detail.orientation)
      })
    }
  })

  useEffect(() => {
    setKey(Math.random())
    setKey1(Math.random())
  }, slackData)

  const Node = ({ text, time, ...props }) => (
    <Flip
      bottom
      key={key1}
      style={{ width: 'fit-content', display: 'inline' }}
      spy={key1}
    >
      <Badge
        variant="pill"
        bg="black"
        sx={{
          flexGrow: 1,
          fontSize: 2,
          color: 'white',
          fontWeight: '400 !important'
        }}
        {...props}
      >
        <Link
          href="https://github.com/hackclub"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: '400 !important'
          }}
        >
          {text} 
          {/* <relative-time datetime={time}>Nov 30, 2022</relative-time> */}
        </Link>
      </Badge>
    </Flip>
  )
  return (
    <>
      <Meta
        as={Head}
        title="Don’t run your coding club alone"
        description="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
        image="https://cloud-epiki4yvg.vercel.app/2020-09-09_drbp62kayjuyyy0ek89mf9fwcp5t4kuz.jpeg"
      />
      <Head>
        <meta
          property="og:logo"
          content="https://assets.hackclub.com/icon-rounded.png"
          size="512x512"
        />
      </Head>
      <ForceTheme theme="light" />
      <Nav />
      <Box
        as="header"
        sx={{
          bg: 'dark',
          pt: [5, 6],
          pb: [2, 3],
          textAlign: 'left',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        <BGImg
          src={AssembleImgFile}
          alt="Hack Clubbers assemble at Figma HQ for the first IRL hackathon in SF since 2020: Assemble. 📸 Photo by Kunal Botla, Hack Clubber in MA!"
          priority
          gradient="linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))"
        />
        {/* <SlideDown duration={768}> */}
        <Box
          sx={{
            maxWidth: [null, 'layoutPlus'],
            position: 'relative',
            mx: 'auto'
          }}
        >
          <Node
            // text={dataPieces[0]}
            // time={githubData2[0]}
            text="✅ New commit in hackclub/hackclub by @bellesea"
            sx={{
              position: 'absolute',
              top: 0,
              right: 2,
              zIndex: 4,
              transform: 'rotate(3deg)'
            }}
          />
          <Fade>
            <Text variant="eyebrow" sx={{ color: 'sunken' }}>
              Welcome to Hack Club
            </Text>
          </Fade>
          <Fade bottom delay={200}>
            <Heading
              as="h1"
              variant="ultratitle"
              sx={{
                color: 'white',
                my: [3, 4],
                mx: 'auto',
                zIndex: 1,
                textAlign: 'left'
              }}
            >
              <Text
                as="span"
                sx={{
                  lineHeight: 1,
                  display: 'block',
                  pb: 3
                }}
              >
                We inspire the hacker ethic in
                <Text sx={{ color: 'transparent', mr: 2 }}>
                  <Text
                    sx={{
                      lineHeight: 0.875,
                      px: 2,
                      backgroundColor: 'red',
                      position: 'absolute',
                      borderRadius: 10,
                      transform: 'rotate(-3deg)',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      '&:hover': { cursor: 'pointer' }
                    }}
                  >
                    teen makers
                  </Text>
                  teen makers{' '}
                </Text>
                around the {''}world by building things we {''}care about
                together.
              </Text>
            </Heading>
          </Fade>
        </Box>
        {/* </SlideDown> */}
        <Carousel />
      </Box>
      <Box as="section" sx={{ pt: [4, 5], color: 'black' }}>
        <Container sx={{ position: 'relative' }} pb={4}>
          <Text variant="eyebrow" as="p">
            A Hack Clubber is someone that
          </Text>
          <Text variant="title">
            Makes interesting things in the real world
          </Text>
          <Grid columns={[1, 2]}>
            <Box
              pt={4}
              pb={5}
              sx={{
                position: 'relative',
                margin: 'auto'
              }}
            >
              <Text variant="subtitle" as="p">
                Here, teenagers don't wait for permission to code. Hack Clubbers
                come together to code because it's fun. Whether you’re a
                beginner programmer or have years of experience, there’s a place
                for you at Hack Club. Coding doesn't have to be a solidary
                activity. In the Hack Club Slack (Discord-style online
                groupchat), you'll find a group of{' '}
                {withCommas(
                  slackData.stats.sort((a, b) => a.ds - b.ds).reverse()[0]
                    .total_members_count
                )}{' '}
                fabulous people to talk to, active at all hours.
              </Text>
              {/* <Text variant="headline" sx={{ textAlign: 'center' }}>
              Code alongside{' '}
              <Text
                key={key}
                sx={{
                  width: 'fit-content',
                  display: 'inline',
                  animation: `${rollout} 4s linear 2s`
                }}
              >
                {withCommas(
                  slackData.stats.sort((a, b) => a.ds - b.ds).reverse()[0]
                    .total_members_count
                )}
              </Text>{' '}
              other teenagers like you and make friends in the largest online
              community of technical teenagers.
            </Text> */}
              <Link href="/slack" passHref sx={{ textDecoration: 'none' }}>
                <Button
                  as="a"
                  variant="ctaLg"
                  sx={{
                    background:
                      'linear-gradient(-132deg, #338eda 14%, #33d6a6 82%)'
                  }}
                  my={3}
                >
                  Join us →
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                pb: '56.25%',
                margin: 'auto',
                borderRadius: '10px',
                overflow: 'none'
              }}
            >
              <Box
                as="iframe"
                muted
                duration={2000}
                sx={{
                  position: 'absolute',
                  // bottom: 0,
                  top: 0,
                  left: 0,
                  // right: 0,
                  // height: '100%',
                  zIndex: 1,
                  width: '100%',
                  height: '100%'
                  // objectFit: 'cover'
                }}
                src="https://www.youtube.com/embed/-sxRdKtKNa0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></Box>
            </Box>
          </Grid>
          <Inspect />
        </Container>
        <Box
          sx={{
            background: 'snow',
            py: 4,
            backgroundImage: `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            backgroundPosition: '10% 10%'
          }}
        >
          <Container>
            <Text variant="eyebrow" as="p">
              Hack Clubbers
            </Text>
            <Text variant="title">Build open source tools</Text>
            <Text variant="subtitle" as="p">
              Led by engineers on the Hack Club team in collaboration with Hack
              Clubbers in the community, these learning tools are built with and
              for teenagers. Get involved with these projects by building
              something with our tools or building out the tools itself.
            </Text>
            <Sprig delay={100} stars={stars} />
            <Sinerider delay={200} />
            <SprigConsole delay={300} />
            <Workshops delay={400} />
          </Container>
        </Box>
        <Box>
          <Container py={4}>
            <Text variant="eyebrow" as="p">
              Hack Clubbers
            </Text>
            <Text variant="title">
              Gather IRL to discover the{' '}
              <Text
                as="span"
                sx={{
                  borderRadius: 'default',
                  px: 2,
                  mx: [-2, 0],
                  whiteSpace: 'nowrap',
                  color: '#5d114c',
                  bg: 'rgb(255, 212, 64)'
                }}
              >
                joy of code
              </Text>
            </Text>
            <Text variant="subtitle" as="p">
              Join or start a Hack Club and be part of a network of high quality
              coding clubs where you learn to code entirely through building
              things. You can start with no experience and build and ship a
              project every meeting.
            </Text>
            <Clubs delay={100} />
            <Bank data={bankData} delay={100} />
            <Epoch delay={200} />
            <Hackathons delay={300} />
          </Container>
        </Box>
        {/* <Container py={4}>
          <Text variant="eyebrow" as="p">
            Hack Clubbers
          </Text>
          <Text variant="title">Run high quality high school hackathons</Text>
          <Text variant="subtitle" as="p">
            It's not an extracurricular or a club. It's not a class or a
            lecture. Hackathons are a place to build things for fun and meet
            others doing the same.
          </Text>
        </Container> */}
        {/* <ScrollingHackathons eventData={hackathonsData} /> */}
      </Box>
      <Box bg="snow" color="black" py={[5, 6]}>
        <Container sx={{ textAlign: ['left', 'center'] }}>
          <Text as="p" variant="eyebrow">
            Let's quickly review
          </Text>
          <Heading as="h2" variant="title">
            Find your second-home in{' '}
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 2,
                ml: [-2, 0],
                whiteSpace: ['wrap', 'nowrap'],
                color: 'white',
                bg: 'red'
              }}
            >
              Hack Club
            </Text>
            .
          </Heading>
          <Grid
            pt={[3, 4]}
            pb={[4, 5]}
            gap={[4, 3, 4]}
            columns={[null, 3]}
            sx={{
              textAlign: 'left',
              '> a, > div': {
                borderRadius: 'extra',
                boxShadow: 'elevated',
                px: [3, null, 4],
                py: [4, null, 5]
              },
              span: {
                boxShadow:
                  '-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)'
              },
              svg: { fill: 'currentColor' }
            }}
          >
            <Card
              as="a"
              href="/slack"
              variant="interactive"
              sx={{
                background:
                  'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)',
                color: 'white',
                svg: { color: 'rgb(51, 142, 218)' }
              }}
            >
              <Stage
                icon="slack"
                color="white"
                name="Join the Slack"
                desc="Connect with other technical teenagers and hack on things together."
              />
            </Card>
            <Card
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(255, 140, 55, 0.9) 0%, rgba(236, 55, 80, 0.9) 100%)',
                color: 'white',
                svg: { color: 'rgb(236, 55, 80)' },
                textDecoration: 'none'
              }}
              as="a"
              href="/clubs"
              variant="interactive"
            >
              <Stage
                icon="clubs"
                color="white"
                name="Start a Club or Attend a Hackathon"
                desc="Build an in-person community of high school hackers, and we're here to help."
              />
            </Card>
            <Card
              sx={{
                background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
                color: 'white',
                svg: { color: '#fb558e' },
                textDecoration: 'none'
              }}
              as="a"
              href="https://github.com/hackclub"
              variant="interactive"
            >
              <Stage
                icon="event-code"
                color="white"
                name="Explore our open-sourced tools"
                desc="We're currently building a game engine, daily streak system, graphing game, and more!"
              />
            </Card>
          </Grid>
        </Container>
      </Box>
      <Footer
        dark
        sx={{
          backgroundColor: 'dark',
          position: 'relative',
          overflow: 'hidden',
          textShadow: '0 1px 2px rgba(0,0,0,0.375)',
          'h2,span,p,a': { color: 'white !important' },
          '> div img': { objectPosition: ['left', 'center'] },
          svg: {
            fill: 'white',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
          }
        }}
      >
        <BGImg
          width={2544}
          height={2048}
          gradient="linear-gradient(rgba(0,0,0,0.125), rgba(0,0,0,0.25))"
          src={FooterImgFile}
          placeholder="blur"
          alt="Globe with hundreds of Hack Clubs"
        />
        <style>
          {`a{
          color: #338eda
        }`}
        </style>
      </Footer>
    </>
  )
}
const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export async function getStaticProps() {
  let dataPieces = []
  let bankData = []
  let stars = []
  let initialBankData = await fetch('https://bank.hackclub.com/stats').then(r =>
    r.json()
  )

  let raised = initialBankData.raised / 100

  console.log(raised)

  bankData.push(
    `💰 ${raised.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })} raised`
  )

  // let initialGitHubData = await fetch(
  //   'https://api.github.com/orgs/hackclub/events'
  // ).then(r => r.json())

  console.log(initialBankData)

  // if(initialGitHubData != null) {
  // let initialGitHubData1 = initialGitHubData.map(x =>
  //   (x.type == 'PushEvent' && x.actor.login != 'github-actions[bot]') ||
  //   x.type == 'WatchEvent' ||
  //   x.type == 'PullRequestEvent'
  //     ? x.type == 'PushEvent'
  //       ? `✅ New commit in ${x.repo.name} by @${x.actor.login}`
  //       : x.type == 'WatchEvent'
  //       ? `⭐️ New star on ${x.repo.name}`
  //       : x.type == 'PullRequestEvent'
  //       ? `🔀 New PR for ${x.repo.name} by @${x.actor.login}`
  //       : `🎉 New activity in ${x.repo.name}`
  //     : null
  // )

  // let initialGithubData2 = initialGitHubData.map(x =>
  //   (x.type == 'PushEvent' && x.actor.login != 'github-actions[bot]') ||
  //   x.type == 'WatchEvent' ||
  //   x.type == 'PullRequestEvent'
  //     ? x.type == 'PushEvent'
  //       ? x.created_at
  //       : x.type == 'WatchEvent'
  //       ? x.created_at
  //       : x.type == 'PullRequestEvent'
  //       ? x.created_at
  //       : x.created_at
  //     : null
  // )
  // console.log([...new Set(initialGitHubData1)])
  // dataPieces = [
  //   ...dataPieces,
  //   ...new Set(
  //     initialGitHubData1.filter(function (el) {
  //       return el != null
  //     })
  //   )
  // ]

  // let githubData2 = initialGithubData2.filter(function (el) {
  //   return el != null
  // })

  // let sar = await fetch(
  //   'https://api.github.com/repos/hackclub/some-assembly-required'
  // ).then(r => r.json())
  
  // stars.push({'sar': sar.stargazers_count})

  console.log(stars)

  const formData = new FormData()

  formData.append('token', process.env.SLACK_API_TOKEN)
  formData.append('date_range', '30d')

  const slackData = await fetch(
    'https://hackclub.slack.com/api/team.stats.timeSeries',
    {
      method: 'POST',
      body: formData,
      headers: {
        Cookie: process.env.SLACK_API_COOKIE
      }
    }
  ).then(r => r.json())

  const res = await fetch('https://hackathons.hackclub.com/api/events/upcoming')
  const hackathonsData = await res.json()
  let games = []
  let tags = []

  // games = await fetch('https://editor.sprig.hackclub.com/metadata.json').then(
  //   res => res.json()
  // )
  // ;[...games]
  //   .sort((a, b) => new Date(b.addedOn) - new Date(a.addedOn))
  //   .slice(games.length - 2, games.length)
  //   .forEach(game => (game.isNew = true))
  // tags = [...new Set(games.reduce((p, c) => [...p, ...c.tags], []))]

  // console.log(games)

  // const workshops = await fetch('https://api.github.com/repos/hackclub/hackclub/contents/workshops?recursive=1')
  // 		.then((res) => res.json())
  // 		.catch((error) => {
  // 			console.log(error);
  // 			return [];
  // 		});
  return {
    props: { hackathonsData, bankData, slackData, stars },
    revalidate: 30
  }
}

export default Page
