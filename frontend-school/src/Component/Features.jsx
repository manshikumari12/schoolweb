import React from 'react'

import { Box, Heading, Text, SimpleGrid, Stack, Icon, Button, Flex } from '@chakra-ui/react';
import { FaChalkboardTeacher, FaBook, FaGraduationCap } from 'react-icons/fa';



function Features() {
  return (
  <>
  
      <Flex
        bg="purple"
        color="white"
        height="80vh"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <Box>
          <Heading fontSize="4xl">Welcome to SchoolName</Heading>
          <Text mt={4} fontSize="lg">
            A place where excellence meets education.
          </Text>
          <Stack mt={6} direction="row" spacing={4} justify="center">
            <Button colorScheme="whiteAlpha" size="lg">
              Learn More
            </Button>
            <Button variant="outline" colorScheme="whiteAlpha" size="lg">
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Flex>

 
      <Box bg="#f7f7f7" py={10} px={6}>
        <Heading textAlign="center" mb={10} color="purple">
          Why Choose Us?
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Stack align="center" spacing={4}>
            <Icon as={FaChalkboardTeacher} w={10} h={10} color="purple" />
            <Heading size="md">Expert Teachers</Heading>
            <Text textAlign="center">
              Learn from industry experts with years of experience.
            </Text>
          </Stack>

          <Stack align="center" spacing={4}>
            <Icon as={FaBook} w={10} h={10} color="purple" />
            <Heading size="md">Comprehensive Curriculum</Heading>
            <Text textAlign="center">
              Our curriculum is designed to equip students with essential knowledge.
            </Text>
          </Stack>

          <Stack align="center" spacing={4}>
            <Icon as={FaGraduationCap} w={10} h={10} color="purple" />
            <Heading size="md">High Graduation Rates</Heading>
            <Text textAlign="center">
              Our students succeed academically and professionally.
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </>



  )
}

export default Features










