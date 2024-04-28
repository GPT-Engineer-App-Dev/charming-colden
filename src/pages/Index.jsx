import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Flex>
          <Image 
            src="/src/images/dewitt-clinton-portrait.jpg"
            alt="DeWitt Clinton portrait"
            boxSize="200px"
            objectFit="cover"
            mr={8}
          />
          <Box>
            <Heading as="h1" size="3xl">DeWitt Clinton</Heading>
            <Text fontSize="xl">Visionary American politician and naturalist</Text>
          </Box>
        </Flex>
        
        <Box>
          <Heading as="h2" size="2xl">Biography</Heading>
          <Text fontSize="lg">
            DeWitt Clinton (1769-1828) was an influential American politician and naturalist who made significant contributions to the development of New York and the United States. Born into a prominent political family, Clinton graduated from Columbia College at age 17 before being admitted to the New York bar in 1790.
          </Text>
          <Text fontSize="lg">
            Clinton went on to serve with distinction in numerous political offices, including as U.S. Senator, Mayor of New York City, and Governor of New York. As mayor, he established the NYC public school system and helped found the New-York Historical Society.  
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="2xl">The Erie Canal</Heading>
          <Flex>
            <Box mr={8}>
              <Text fontSize="lg">
                Clinton's most enduring legacy is his instrumental role in the development of the Erie Canal. Recognizing the potential of a canal to connect the Hudson River and the Great Lakes, Clinton tirelessly championed the project, securing funding and public support.
              </Text>
              <Text fontSize="lg">
                Under his leadership as Governor, the canal was completed in 1825 after 8 years of construction. The Erie Canal revolutionized transportation and commerce, dramatically reducing shipping costs and spurring unprecedented economic growth. It established New York City as the nation's preeminent port and commercial hub.
              </Text>
            </Box>
            <Image
              src="/src/images/erie-canal.jpg" 
              alt="Erie Canal"
              boxSize="300px"
              objectFit="cover"
            />
          </Flex>
        </Box>
        
        <Box>
          <Heading as="h2" size="2xl">Legacy and Impact</Heading>
          <Text fontSize="lg">
            DeWitt Clinton's visionary leadership and unwavering commitment to progress helped shape the course of American history. His tireless advocacy for the Erie Canal in the face of political opposition and logistical challenges exemplifies the determination and foresight of a great leader.
          </Text>
          <Text fontSize="lg">
            Clinton's legacy lives on in the numerous places and institutions across New York and the nation that bear his name. His story continues to inspire us to dream big, persevere through adversity, and work to build a brighter future.
          </Text>
        </Box>
        
      </VStack>
    </Box>
  );
};

export default Index;