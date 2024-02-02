import { useEffect, useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './Register.module.css';

export function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("")

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome for the first time!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button">
          Click here to log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <PasswordInput label="Password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} required mt="md" />
        <TextInput label="Phone Number" placeholder="00000000000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <TextInput label="First Name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <TextInput label="Last Name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}