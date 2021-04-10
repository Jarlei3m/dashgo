import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Járlei Rodrigues</Text>
        <Text color='gray.300' fontSize='small'>
          jarlei_rodrigues@outlook.com
        </Text>
      </Box>
      <Avatar
        size='md'
        name='Járlei Rodrigues'
        src='https://github.com/jarlei3m.png'
      />
    </Flex>
  );
}
