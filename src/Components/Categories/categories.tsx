import React from "react";
import Joke from "../Joke/index";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import {
  CardContent,
  CardFooter,
  CardImage,
  CardItem,
  CardList,
  Container,
} from "./styles";

const getAllCategories = gql`
  query {
    Categories {
      category
    }
  }
`;

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const onClose = () => {
    setIsOpen(false);
    setCategory("");
  };

  let { data} = useQuery(getAllCategories);
  return (
    <>
      {isOpen ? <Joke onClose={onClose} category={category} isOpen={isOpen} /> : null}
      <Container>
        <CardList>
          {data &&
            data.Categories.map((chat: any,i:number) => (
              <CardItem key={i}>
                <CardImage>
                  <img
                    src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
                    alt="sata"
                  />
                </CardImage>
                <CardContent>
                  <h1>{chat.category}</h1>
                </CardContent>
                <CardFooter>
                  <button
                    onClick={() => {
                      setCategory(chat.category);
                      setIsOpen(true);
                    }}
                  >
                    Generate Joke
                  </button>
                </CardFooter>
              </CardItem>
            ))}
        </CardList>
      </Container>
    </>
  );
};

export default Example;
