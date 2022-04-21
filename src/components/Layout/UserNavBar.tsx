import React, { useRef, useState } from 'react'
import { Flex, Text, Link, Button } from '@chakra-ui/react'
import DcBug from 'src/static/svg/DbBug'
import { AnimatePresence, motion } from 'framer-motion'
import DcTm from 'src/static/svg/DcTm'
import useAppState from 'src/hooks/useAppState'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from 'src/generated/graphql'
import useOnClickOutside from '../Hook/UseOnClickOutside'

const MotionFLex = motion(Flex)
const MotionButton = motion(Button)
const MotionText = motion(Text)

const navLinks = [
  {
    name: 'Home',
    path: '/',
    newTab: false,
  },
  {
    name: 'Settings',
    path: '/api',
    newTab: false,
  },
  {
    name: 'Documentation',
    path: 'https://my-website-two-chi.vercel.app/docs/intro',
    newTab: true,
  },
]

const UserNavBar = (): JSX.Element => {
  const [isHover, setIsHover] = useState(false)
  const { dispatchLogout } = useAppState()
  const navigate = useNavigate()
  const ref = useRef(null)

  const [logout] = useLogoutMutation()

  const variants = {
    open: { width: '200px', backgroundColor: '#24323F' },
    closed: { width: '66px', backgroundColor: '#24323F' },
  }

  const handleClickOutside = () => setIsHover(false)

  const handleClickToggle = () => setIsHover((c) => !c)

  const handleLogout = async () => {
    await logout()
    dispatchLogout()
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <MotionButton
      ref={ref}
      fontFamily="Poppins"
      variant="solid"
      whileHover={{ backgroundColor: `${isHover ? '#24323F' : '#30475B'}` }}
      onClick={handleClickToggle}
      variants={variants}
      animate={isHover ? 'open' : 'closed'}
      closed={isHover ? 'closed' : 'open'}
      transition={{ default: { duration: 0.2, delay: 0 } }}
      position="fixed"
      left={0}
      top={0}
      py="20px"
      px="10px"
      width="60px"
      height="100%"
      flexDirection="column"
      alignItems="flex-end"
      rounded={0}
      justifyContent={isHover ? 'space-between' : 'flex-end'}
      zIndex={100}
      overflow="hidden"
    >
      <AnimatePresence>
        {isHover && (
          <MotionFLex
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            width="100%"
            exit={{ x: -200 }}
            transition={{ default: { duration: 0.4, delay: 0 } }}
            key="navlinks"
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            color="white"
            justifyContent="flex-start"
            px="10px"
          >
            <MotionFLex
              mb="50px"
              mt="20px"
              px={2}
              justifyContent="space-between"
              alignItems="center"
              width="80px"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <DcBug />
              <DcTm />
            </MotionFLex>
            <AnimatePresence key="navlinks">
              {navLinks.map((link) => (
                <MotionFLex
                  cursor="pointer"
                  onClick={() => {
                    return link.newTab
                      ? window.open(link.path)
                      : navigate(link.path)
                  }}
                  key={link.name}
                  width="100%"
                  px={2}
                  rounded={2}
                  py={1}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0, x: -999 }}
                  transition={{ default: { duration: 0.01, delay: 0 } }}
                  whileHover={{ backgroundColor: '#2D3F50' }}
                >
                  <Text textAlign="right" flexWrap="nowrap" fontWeight="bold">
                    {link.newTab ? (
                      <Link
                        href={link.path}
                        target={`${link.newTab ? '_blank' : ''}`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      link.name
                    )}
                  </Text>
                </MotionFLex>
              ))}
            </AnimatePresence>
            <MotionFLex
              width="100%"
              px={2}
              rounded={2}
              py={1}
              whileHover={{ backgroundColor: '#3A4D5F' }}
            >
              <Text
                cursor="pointer"
                onClick={handleLogout}
                textAlign="right"
                flexWrap="nowrap"
                fontWeight="bold"
              >
                Logout
              </Text>
            </MotionFLex>
          </MotionFLex>
        )}
      </AnimatePresence>
      <AnimatePresence key="bottom">
        <MotionFLex
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ default: { duration: 0.4, delay: 0 } }}
          alignItems="center"
          justifyContent="center"
          color="white"
          flexDirection="row"
          width="100%"
          exit={{ opacity: 0 }}
        >
          {!isHover ? (
            <DcBug />
          ) : (
            <MotionText
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              px={4}
              transition={{ delay: 0.1 }}
              fontWeight="bold"
              w="full"
              textalign="left"
            >
              DC BUG REPORT
            </MotionText>
          )}
        </MotionFLex>
      </AnimatePresence>
    </MotionButton>
  )
}

export default UserNavBar
