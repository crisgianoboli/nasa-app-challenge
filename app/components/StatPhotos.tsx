import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from "@chakra-ui/react";

type PhotosData = {
  totalPages: number;
  totalPhotos: number;
};

const StatPhotos = (props: PhotosData) => {
  const { totalPages, totalPhotos } = props;

  return (
    <StatGroup>
      <Stat >
        <StatLabel>Total Pages</StatLabel>
        <StatNumber>{totalPages}</StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Total Photos</StatLabel>
        <StatNumber>{totalPhotos}</StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default StatPhotos;
