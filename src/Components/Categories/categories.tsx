import React from "react";
import Joke from "../Joke/index";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Jumbotron } from "reactstrap";

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

  let { data } = useQuery(getAllCategories);

  console.log();
  return (
    <>
      {isOpen ? (
        <Joke onClose={onClose} category={category} isOpen={isOpen} />
      ) : null}
      <Container>
        <Jumbotron>
          <h1 className="display-3">Chucknorris Jokes</h1>
          <p className="lead">
            This is an SAP application that shows of some simple yet powerful
            concepts.
          </p>
          <p>{"✅"}{""} Styles components</p>
          <p>{"✅"} {""}Apollo Client</p>
          <p>{"✅"} {""}TypeScript</p>
          <p>{"✅"}{""} Graphql</p>


          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </Jumbotron>
        <CardList>
          {data &&
            data.Categories.map((chat: any, i: number) => (
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
                    Testing
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
