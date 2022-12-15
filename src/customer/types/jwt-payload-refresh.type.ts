import { JwtPayloadForCustomer } from '.';

export type JwtPayloadWithRefreshToken = JwtPayloadForCustomer & {
  refreshToken: string;
};
