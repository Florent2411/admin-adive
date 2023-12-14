import apiClient from "../../client";
import Formatter from "../../../libs/formatters";

export async function getJobs(token) {
  const response = await apiClient.get("/jobs?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = Formatter.arrayResponse.format(response.data.data);

  return data;
}
