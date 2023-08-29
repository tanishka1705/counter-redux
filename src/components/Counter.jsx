import { Box, Button, Container, HStack, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

 
const Counter = () =>{

   const counter = useSelector(state => state.counter)
   const dispatch = useDispatch()

   const incrementHandler = () =>{
    dispatch({type : 'increment'})
   }

   const decrementHandler = () =>{
    dispatch({type : 'decrement'})
   }

   const resetHandler = () =>{
    dispatch({type : 'reset'})
   }

    return (
    <Container display='flex' flexDirection='column' alignItems='center' justifyContent='center'>

      <Heading mt={35}>Counter App</Heading> 

      <Box mt={50} bg='gray' p='80px' borderRadius={10}>

        <Text textAlign='center' color={"white"} fontSize={60} fontWeight={"bold"}>{counter}</Text>

        <HStack mt={30} spacing={5}>
            <Button onClick={incrementHandler}>Increment</Button>
            <Button onClick={decrementHandler}>Decrement</Button>
            <Button onClick={resetHandler}>Reset</Button>
        </HStack>

      </Box>
        
    </Container>
    )
}
export default Counter;