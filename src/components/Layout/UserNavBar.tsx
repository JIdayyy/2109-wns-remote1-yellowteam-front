import React, { useState } from 'react'
import { Flex, Text, Link } from '@chakra-ui/react'
import DcBug from 'src/static/svg/DbBug'

import { AnimatePresence, motion } from 'framer-motion'
import DcTm from 'src/static/svg/DcTm'

const MotionFLex = motion(Flex)
const MotionText = motion(Text)

const navLinks = [
  {
    name: 'Reports',
    path: '/',
  },
]

const UserNavBar = (): JSX.Element => {
  const [isHover, setIsHover] = useState(false)

  return (
    <MotionFLex
      fontFamily="Poppins"
      whileHover={{ width: '12%' }}
      transition={{ default: { duration: 0.2 } }}
      position="fixed"
      left={0}
      top={0}
      py="20px"
      px="10px"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      width="5%"
      backgroundColor="#24323F"
      height="100%"
      flexDirection="column"
      alignItems="flex-end"
      justifyContent={isHover ? 'space-between' : 'flex-end'}
      zIndex={100}
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
              width="35%"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <DcBug />
              <DcTm />
            </MotionFLex>
            {navLinks.map((link) => (
              <MotionFLex
                width="100%"
                px={2}
                rounded={2}
                py={1}
                whileHover={{ backgroundColor: '#3A4D5F' }}
              >
                <Text textAlign="right" flexWrap="nowrap" fontWeight="bold">
                  <Link href={link.path}> {link.name}</Link>
                </Text>
              </MotionFLex>
            ))}
          </MotionFLex>
        )}
      </AnimatePresence>
      <AnimatePresence>
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
              transition={{ delay: 0.1 }}
              fontWeight="bold"
            >
              DC BUG REPORT
            </MotionText>
          )}
        </MotionFLex>
      </AnimatePresence>
    </MotionFLex>
  )
}

export default UserNavBar
