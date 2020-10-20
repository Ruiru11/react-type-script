/* eslint-disable*/
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Title,
  Close,
} from "./styles";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Spinner } from "reactstrap";

const getAllCategories = gql`
  query RandomJoke($category: String!) {
    RandomJoke(category: $category) {
      category {
        category
      }
      icon
      origin_url
      joke
    }
  }
`;

const Jokes = (props: {
  onClose: Function;
  category: string;
  isOpen: boolean;
}) => {
  const [waiting, setWaiting] = React.useState(true);
  const [ourJoke, changeJoke] = React.useState("");

  let { data, refetch } = useQuery(getAllCategories, {
    variables: { category: props.category },
  });
  React.useEffect(() => {
    if (data?.RandomJoke?.joke) {
      setWaiting(false);
      changeJoke(data.RandomJoke.joke);
    }
  }, [data]);

  React.useEffect(() => {
    if (props.isOpen) {
      setWaiting(true);
      changeJoke("");
      refetch();
    }
  }, [props.isOpen]);

  return (
    <>
      <ModalOverlay></ModalOverlay>
      <Modal>
        <ModalHeader>
          <Title> A random joke from {props.category} category</Title>
          <Close onClick={() => props.onClose()}> {"❌"} </Close>
        </ModalHeader>

        <ModalContent>
          {waiting ? (
            <div>
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner type="grow" color="warning" />
              <Spinner type="grow" color="info" />
              <Spinner type="grow" color="light" />
              <Spinner type="grow" color="dark" />
            </div>
          ) : (
            ourJoke
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Jokes;
