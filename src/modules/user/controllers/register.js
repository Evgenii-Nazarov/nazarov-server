import mongoose from 'mongoose';
import User from '../userModel';
import { get } from 'lodash';

const register = async (req, res) => {
  const firstName = get(req, 'body.firstName', '').trim();
  const lastName = get(req, 'body.lastName', '').trim();
  const email = get(req, 'body.email', '')
    .trim()
    .toLowerCase()
  const password = get(req, 'body.password', '');

  if (!/(?=.{5,})/.test(password)) {
    const reason = 'Wrong password format';

    return res.status(201).json(reason);
  }

  const createdUser = await createUser({
    email,
    password,
    firstName,
    lastName,
  });

  if (createdUser.success) {
    return res
      .status(201)
      .json('User created successfully. Please check your email and verify it');
  } else {
    return res.status(404).json(createdUser.message);
  }
};

export default register;


async function createUser({ email, password, firstName, lastName }) {
  const userId = new mongoose.Types.ObjectId();

  const user = new User({
    _id: userId,
    email,
    firstName,
    lastName,
    password, // hash as soon as possible!
    roles: ['admin'],
  });

  return user
    .save()
    .then(() => {

      return { message: 'User created successfully', success: true};
    })
    .catch(error => {
      if (error.code === 11000) return { message: 'Email exists', success: false};
      return { message: 'Error', success: false}
    });
}
