import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container h={'100vh'} p="16" maxW={"container.xl"}>
      <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={['full',"96"]} m={"auto"} my={"16"}>
          <Heading textAlign={"center"}>VIDEO HUB</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input type='text' required placeholder='Enter your name' focusBorderColor='purple.500'/>
          <Input type='email' required placeholder='Enter your email' focusBorderColor='purple.500'/>
          <Input type='password' required placeholder='Enter your password' focusBorderColor='purple.500'/>
          <Button colorScheme='purple' type='submit'> Sign up</Button>

          <Text textAlign={"right"}>
              Already a user? {" "}
              <Button variant={"link"} colorScheme='purple'>
                <Link to={"/login"}>Login</Link>
              </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp