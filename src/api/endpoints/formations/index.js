import apiClient from "../../client";
import Formatter from "../../../libs/formatters";

export async function getFormations(token) {
  const response = await apiClient.get("/formations?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.data.data;

  return Formatter.arrayResponse.format(data);
}
