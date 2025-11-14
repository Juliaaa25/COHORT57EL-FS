import type MovieCredentials from "./MovieCredentials";

export default interface Movie extends MovieCredentials {
  id: string;
}

// через extends от MovieCredential
