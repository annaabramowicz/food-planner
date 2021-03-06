import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import Image from "components/Image/Image";
import Icon from "components/Icon/Icon";
import Tag from "components/Tag/Tag";
import Box from "components/Box/Box";
import { IoFlameOutline } from "react-icons/io5";
import { colorFourth } from "App/style/theme/theme";
import PropTypes from "prop-types";

function Recipe({ recipe }) {
  const [calories, protein, fat, carb] = recipe.nutrition.nutrients;

  return (
    <Box
      bgColor="white"
      maxW={{ base: "210px", sm: "255px" }}
      border="1px"
      borderColor={colorFourth}
      borderRadius="lg"
      overflow="hidden"
      m={{ base: 2, sm: 2 }}
      pos="relative"
      height={{ base: "275px", sm: "360px" }}
    >
      <Image
        loading="lazy"
        height={{ base: "155px", sm: "187px" }}
        objectFit="none"
        objectPosition="-30px"
        src={recipe.image}
        alt={recipe.title}
      />
      <Flex
        flexDirection="column"
        alignItems="start-flex"
        height={{ base: "118px", sm: "175px" }}
        justifyContent="space-between"
        p={{ base: 2, sm: 4 }}
      >
        <Text mb="6px" textAlign="start">
          {recipe.title}
        </Text>
        <Box>
          <Flex mb={{ sm: "7px" }} justifyContent="flex-start">
            <Tag fontSize={{ base: "xs", sm: "sm" }} p="3px" mr={1}>
              Protein {Math.floor(protein.amount)} {fat.unit}
            </Tag>
            <Tag fontSize={{ base: "xs", sm: "sm" }} p="3px" mr={1}>
              Fat {Math.floor(fat.amount)} {fat.unit}
            </Tag>
            <Tag fontSize={{ base: "xs", sm: "sm" }} p="3spx">
              Carb {Math.floor(carb.amount)} {carb.unit}
            </Tag>
          </Flex>
          <Flex
            pos={{ base: "absolute", sm: "static" }}
            left="10px"
            top="105px"
            borderRadius="5px"
            bg="white"
            p="2px 6px 2px 4px"
            border="1px"
            borderColor={colorFourth}
            mt={1}
            w="100px"
          >
            <Icon w="20px" as={IoFlameOutline} />
            <Text mt="2px">{Math.floor(calories.amount)} Cal</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    imageType: PropTypes.string,
    nutrition: PropTypes.shape({
      nutrients: PropTypes.array,
    }),
    title: PropTypes.string,
  }),
};
export default Recipe;
