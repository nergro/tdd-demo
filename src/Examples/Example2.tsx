import React, { FC, useState, useEffect } from "react";
import { Button } from "Atoms/Button";
import styled from "styled-components/macro";
import { List, ListItem } from "Atoms/List";
import { getUsers } from "Services/getUsers";
import { User } from "types/user";
import { P, H1 } from "Atoms/text";

const Container = styled.div`
  padding: 50px;
`;

const LoadButton = styled(Button)`
  margin-top: 50px;
`;

const StyledList = styled(List)`
  margin-top: 50px;
`;

export const Example2: FC = () => {
  const [loadUsers, setLoadUsers] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    if (loadUsers && !users) {
      setIsLoading(true);
      getUsers()
        .then((users) => {
          setUsers(users);
        })
        .catch((err) => {
          setError(err.response.data.errorMessage);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loadUsers, users]);

  if (error) {
    return (
      <Container>
        <H1>Users list</H1>
        <P>{error}</P>
      </Container>
    );
  }

  return (
    <Container>
      <H1>Users list</H1>
      {isLoading ? (
        <P>Loading...</P>
      ) : users ? (
        <P>Loaded</P>
      ) : (
        <LoadButton onClick={() => setLoadUsers(true)}>Load users</LoadButton>
      )}

      {users && users.length > 0 && (
        <StyledList>
          {users.map((x) => (
            <ListItem key={x.id}>
              <P>
                <strong>Name: </strong>
                {x.name} <strong>Email: </strong>
                {x.email}
              </P>
            </ListItem>
          ))}
        </StyledList>
      )}
    </Container>
  );
};
