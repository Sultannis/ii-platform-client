import axios, { type AxiosResponse } from "axios";
import apiConfig from "@/config/config";
import { useAuthenticate } from "@/common/composables/authenticate";

const apiVersion = "v1";
const { auth } = useAuthenticate();

const instance = axios.create({
  baseURL: `${apiConfig.baseUrl}/${apiVersion}`,
});

export class ErrorResponse extends Error {
  constructor(public message: string, public status: number) {
    super(message);
  }
}

export class DbConcurrencyError extends ErrorResponse {}

export class InternalServerError extends ErrorResponse {}

export class NotExistError extends ErrorResponse {}

export class IncorrectDataError extends ErrorResponse {}

instance.interceptors.request.use(
  (config) => {
    if (auth.authToken) {
      config.headers = { Authorization: `Bearer ${auth.authToken}` };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  ({ response }: { response: AxiosResponse<string> }) => {
    let error = new ErrorResponse(response.data, response.status);

    if (response.status === 401) {
      error = new IncorrectDataError(response.data, response.status);
    }

    if (response.status === 404) {
      error = new NotExistError(response.data, response.status);
    }

    if (response.status === 409) {
      error = new DbConcurrencyError(
        JSON.parse(response.request.response).message,
        response.status
      );
    }

    if (response.status === 500) {
      error = new InternalServerError(response.data, response.status);
    }
    // Generic Error Response
    return Promise.reject(error);
  }
);

export default instance;
