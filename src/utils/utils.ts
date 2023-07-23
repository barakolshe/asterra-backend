import { Response } from "express";
import { REQUEST_FAILED, REQUEST_FAILED_MESSAGE } from "../consts";

export const basicResultHandler = (res: Response, queryResult: any) => {
  if (queryResult !== REQUEST_FAILED) {
    res.send(JSON.stringify(queryResult));
  } else {
    res.status(400);
    res.send(REQUEST_FAILED_MESSAGE);
  }
};
