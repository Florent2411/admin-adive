import apiClient from "../../client";

export async function createCV({ token, ...data }) {
  const response = await apiClient.post("/cvs", { ...data },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const { id, attributes } = response.data;
  const cv = { id, ...attributes };
  return cv;
}

export async function deleteCV({ token, cvId }) {
  const response = await apiClient.delete("/cvs/" + cvId,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const { id, attributes } = response.data.data;
  const cv = { id, ...attributes };
  return cv;
}

export async function updateCV({ token, cvId, ...data }) {
  const response = await apiClient.put("/cvs/" + cvId, { data },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const { id, attributes } = response.data.data;
  const cv = { id, ...attributes };
  return cv;
}
