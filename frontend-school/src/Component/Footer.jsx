import React from 'react'
import { Box,Stack,Text,Button,HStack } from '@chakra-ui/react'
function Footer() {
  return (
    
      
    <>
         <Box bg="black" color="white" py={6} textAlign="center">
      <Stack spacing={4}>
        <Text>© 2024 SchoolName. All rights reserved.</Text>
        <HStack justify="center" spacing={6}>
          <Button variant="link" colorScheme="whiteAlpha">
            Privacy Policy
          </Button>
          <Button variant="link" colorScheme="whiteAlpha">
            Terms of Service
          </Button>
        </HStack>
      </Stack>
    </Box>

    </>
  )
}
export default Footer