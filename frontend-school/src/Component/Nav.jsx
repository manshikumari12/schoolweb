import React from 'react'
import { Flex,Stack,HStack,Heading,Box,Button,useColorModeValue,Link } from '@chakra-ui/react'
function Nav() {
  return (
 <>
 <Flex 
 minHeight={"10vh"}
 border={"1px solid"}
 bg={useColorModeValue("purple")}
 px={6}
 justify={"center"}
 align={"center"}
 >
    <Stack display={"flex"} justify={"center"} align={"center"} width={"full"}>
        <HStack pacing={12} width={"full"} justify={"space-between"}>
            <Heading color={"whitesmoke"}>YourSchool</Heading>
              <HStack>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>
                <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                Signup/Login
                </Link>
             </Button>
        </HStack>
        </HStack>
      
    </Stack>


 </Flex>
 </>
  )
}

export default Nav
