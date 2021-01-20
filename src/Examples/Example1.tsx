import React, { FC, useState, MouseEvent } from "react";
import styled from "styled-components/macro";
import { Button } from "Atoms/Button";
import { H1 } from "Atoms/text";
import { List, ListItem } from "Atoms/List";

const Container = styled.div`
  padding: 50px;
`;

const Form = styled.form`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  background: transparent;
  border: 2px solid #717c91;
  color: #ffffff;
  padding: 5px 20px;
  outline: none;
`;

const SubmitButton = styled(Button)`
  margin-top: 15px;
  height: 40px;
  width: 150px;
`;

export const Example1: FC = () => {
  const [inputTask, setInputTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([
    // "Dishes",
    // "Shopping",
    // "Read a book",
  ]);

  const onSubmit = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // if (inputTask) {
    //   setTasks([...tasks, inputTask]);
    //   setInputTask("");
    // }
  };
  return (
    <Container>
      <H1>Todo tasks</H1>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Enter task"
          alt="task input"
          onChange={(e) => setInputTask(e.target.value)}
          value={inputTask}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      <List>
        {tasks.map((x) => (
          <ListItem key={x}>{x}</ListItem>
        ))}
      </List>
    </Container>
  );
};
