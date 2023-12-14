import apiClient from "../../client";
import Formatter from "../../../libs/formatters";

export async function getDocuments({ token }) {
  const response = await apiClient.get("/documents",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = Formatter.arrayResponse.format(response.data.data);
  return data;
}
