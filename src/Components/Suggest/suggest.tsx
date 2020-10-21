import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const SuggestionModal = (props:{isOpen:boolean,setIsOpen:Function}) => {
  const [state, setState] = React.useState({ joke: "", name: "", result: "" });

  const onSubmit = () => {
    if (state.result) {
      console.log(state.result);
    } else {
      console.log(`Provide both fields`);
    }
  };

  const onChange = (name: string, value: string) => {
    setState({
      ...state,
      [name]: value,
      result: `your name is ${state.name} and your joke suggetsion ${state.joke} NB: this is the data that we would send to the server`,
    });
  };

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader>Joke suggest</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                onChange={(e) => onChange("name", e.target.value)}
                type="text"
                name="text"
                id="exampleText"
              />
              <Input
                onChange={(e) => onChange("joke", e.target.value)}
                type="text"
                name="text"
                id="exampleText"
              />
            </FormGroup>
          </Form>
          <div>
            <p style={{color:"green"}}>Your name: {state.name}</p>
            <p style={{color:"blue"}}>Joke :{state.joke}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onSubmit}>Suggest Joke</Button>
          <Button onClick={() => props.setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SuggestionModal;
