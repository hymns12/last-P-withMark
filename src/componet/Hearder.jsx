import React from 'react';
import { Flex, Theme, Text, Container } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export const Hearder = () => {
    
  return (
    <>
        <Theme>
            <Container>
                <Flex style={{justifyContent:'space-between', margin: '20px'}}>
                    <Flex align={'center'} gap={'10'}>
                    <img src='logo1.gif' width={50}/>
                    <Text style={{fontSize:'20px', fontWeight:'600'}}>Spidy-All-IN-Guy</Text>
                    </Flex>
                    <w3m-button />
                </Flex>
            </Container>
           
        </Theme>
    </>
  )
}
