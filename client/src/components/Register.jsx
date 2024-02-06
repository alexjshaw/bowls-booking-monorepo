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
  Select
} from '@mantine/core';
import classes from './Register.module.css';
import { registerWithEmailAndPassword } from "../utils/firebase";

export function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("")
  const [selectedClub, setSelectedClub] = useState("")
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await fetch('http://localhost:4000/club');
        if (response.ok) {
          const data = await response.json();
          setClubs(data);
        } else {
          console.error('Failed to fetch clubs:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchClubs();
  }, []);

  const register = async () => {
    try {
      const userUID = await registerWithEmailAndPassword(
        email,
        password
      )

      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        firebaseUID: userUID,
        club: selectedClub,
      }

      await createUserDocument(userData)

    } catch (error) {
      console.error(error)
    }
  }

  const createUserDocument = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...userData})
      });
  
      if (!response.ok) {
        throw new Error('Failed to create user document');
      }
  
      console.log('User document created successfully');
    } catch (error) {
      throw new Error(error.message);
    }
  };
  

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
        <Select
          label="Club"
          placeholder="Select a club"
          value={selectedClub}
          onChange={(value) => setSelectedClub(value)}
          data={clubs.map(club => ({ label: club.name, value: club._id }))}
          required
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={register}>
          Create Account
        </Button>
      </Paper>
    </Container>
  );
}