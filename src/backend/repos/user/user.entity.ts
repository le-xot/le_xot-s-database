import { Roles } from './user.entity.enums';

export type UserEntity = {
  id: number;
  username: string;
  password: string;
  role: Roles;
};
