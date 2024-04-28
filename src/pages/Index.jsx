import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">DeWitt Clinton</Heading>
        <Text fontSize="xl">
          DeWitt Clinton (1769-1828) was an American politician and naturalist who served as a United States Senator, Mayor of New York City, and the sixth Governor of New York. He was a major figure in the development of the Erie Canal.
        </Text>
        <Heading as="h2" size="xl">Early Life and Education</Heading>
        <Text fontSize="lg">
          Born in Little Britain, New York, DeWitt Clinton was the second son of James Clinton, a Revolutionary War general, and Mary DeWitt. He graduated from Columbia College in 1786 and went on to study law, gaining admission to the New York bar in 1790.
        </Text>
        <Heading as="h2" size="xl">Political Career</Heading>
        <Text fontSize="lg">
          Clinton's political career began when he was elected to the New York State Assembly in 1798 as a Democratic-Republican. He served in the United States Senate from 1802 to 1803 and as Mayor of New York City from 1803 to 1815. 
        </Text>
        <Text fontSize="lg">
          As mayor, Clinton was instrumental in establishing the New York City Public School System and helped found the New-York Historical Society. He also took an early interest in a proposed canal connecting the Hudson River to Lake Erie.
        </Text>
        <Heading as="h2" size="xl">The Erie Canal</Heading>
        <Text fontSize="lg">
          Clinton is best known for his role in the construction of the Erie Canal. As governor of New York from 1817 to 1823 and again from 1825 to 1828, he was the driving force behind the project. The canal transformed New York City into the nation's leading port and opened the interior of North America to settlement and commerce. 
        </Text>
        <Text fontSize="lg">
          Clinton's vision and leadership were critical to the canal's completion in 1825 after eight years of construction. He led the inaugural trip from Buffalo to New York City and poured a keg of Lake Erie water into the Atlantic Ocean to mark the "Wedding of the Waters."
        </Text>
        <Heading as="h2" size="xl">Legacy</Heading>
        <Text fontSize="lg">
          DeWitt Clinton died suddenly in 1828 while still serving as governor. He was a visionary leader who left a lasting impact on New York and the nation through his role in the Erie Canal and his many other contributions in politics and education. Numerous places and institutions are named in his honor, including Clinton County, New York, and the DeWitt Clinton High School in New York City.
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;