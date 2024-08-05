import { Roles } from '../../common/enums/user.enum';

export type UserEntity = {
  id: number;
  username: string;
  password: string;
  role: Roles;
};
