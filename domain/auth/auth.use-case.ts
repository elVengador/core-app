import { RefreshTokenInput, SignInInput, SignUpInput, TokensOutput } from "../../../app/domain/entities";

export type SignUp = (params: SignUpInput) => Promise<string>
export type SignIn = (params: SignInInput) => Promise<TokensOutput>
export type RefreshToken = (params: RefreshTokenInput) => Promise<TokensOutput>
