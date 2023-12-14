import apiClient from "../../client";
import Formatter from "../../../libs/formatters";

export async function postulate({ token, ...payload }) {
  const response = await apiClient.post("/postulations", {
    data: {
      ...payload
    }
  },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const { id, attributes } = response.data;
  const postulation = { id, ...attributes };
  return postulation;
}


export async function getPostulations({ token }) {
  const response = await apiClient.get("/postulations?populate=*",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = Formatter.arrayResponse.format(response.data.data);
  return data;
}
