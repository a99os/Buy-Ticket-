import { JwtPayloadForAdmin } from '.';

export type JwtPayloadWithRefreshToken = JwtPayloadForAdmin & { refreshToken: string };
