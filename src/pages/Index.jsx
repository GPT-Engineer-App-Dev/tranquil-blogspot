import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link as={RouterLink} to="/" color="white">Home</Link>
              <Link as={RouterLink} to="#" color="white">About</Link>
              <Link as={RouterLink} to="#" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3" mr={{ md: 8 }}>
            <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>Add New Post</Button>
            <VStack spacing={8} align="stretch">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Heading fontSize="xl">{post.title}</Heading>
                  {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                  <Text mt={4}>{post.content}</Text>
                </Box>
              ))}
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" mt={{ base: 8, md: 0 }}>
            <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              {posts.slice(0, 3).map((post, index) => (
                <Link key={index} href="#" color="brand.800">{post.title}</Link>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;