import { post } from "@utils/client";
import { endpoints } from "@utils/endpoints";
import type { Payload } from "../types";

export const login = (body: Payload) =>
  post({
    url: body?.forceLogin
      ? `${endpoints.login}?forceLogin=true`
      : endpoints.login,
    body: body.payload,
  });

export const logout = () => post({ url: endpoints.logout });
