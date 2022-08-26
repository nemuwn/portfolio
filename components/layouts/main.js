import Head from "next/head";
import dynamic from "next/dynamic";

import { Box, Container } from "@chakra-ui/react";
import VoxelDogLoader from "../voxel-dog-loader";
import VoxelDog from "../voxel-dog";

const Main = () => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Nemuwn</title>
      </Head>
      <Container maxW="container.md">
        <VoxelDog />
      </Container>
    </Box>
  );
};
export default Main;
