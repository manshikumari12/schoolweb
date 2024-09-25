import React from 'react'
import { Box, Flex, Heading, Text, Stack, Image, useColorModeValue } from '@chakra-ui/react';
function Landing() {
  return (
    <>
    <Flex
      height="80vh"
      justify="center"
      align="center"
      bg={useColorModeValue("gray.50", "gray.800")}
      p={8}
    >
      <Flex
        w="full"
        maxW={{ base: "100%", lg: "1200px" }} 
        boxShadow="xl"
        borderRadius="md"
        overflow="hidden"
      >
     
        <Box flex="1">
          <Image
            src="https://imgs.search.brave.com/ceUbtO6eFy8RrFrXsC2wF2Pyh2gyrQnLOeXvzH6AlL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/MDI4NTkyNy9waG90/by95b3VuZy13b21h/bi1hLXVuaXZlcnNp/dHktc3R1ZGVudC1z/dHVkeWluZy1vbmxp/bmUud2VicD9hPTEm/Yj0xJnM9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWVXTVNiOHZRQU54/Z0puQkJqcVNSMllm/Z3lzODdsTG93Z3Nh/WjB1dXdFV3M9"
            alt="Academic Image"
            objectFit="cover"
            height="100%"
            width="100%"
          />
        </Box>

    
        <Box
          flex="1"
          p={8}
          bg="purple"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Stack spacing={6}>
            <Heading fontSize="4xl" fontWeight="bold">
              Welcome to SchoolName
            </Heading>
            <Text fontSize="lg" fontWeight="light">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </Text>
            <Text fontSize="md">
              At <strong>SchoolName</strong>, we are dedicated to fostering an environment of academic excellence and personal growth. Our world-class faculty and comprehensive curriculum ensure that students are prepared for the challenges ahead.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>

    </>
      

  )
}

export default Landing
