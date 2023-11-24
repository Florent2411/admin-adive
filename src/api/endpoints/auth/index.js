import apiClient from "../../client";

export async function login(identifier, password) {
    const response = await apiClient.post("/auth/local", { identifier, password });
    return response.data;
}

export async function setupAccount({
    isDeliveryMember,
    isNewsletterMember,
    isProspectionMember,
    birthdate,
    companyType,
    country,
    firstName,
    gender,
    lastName,
    phone,
    skillsDescription,
    token
}) {
    const response = await apiClient.post("/accounts/setup-account", { country, companyType, firstName }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response);
}

export async function register({ username, email, password }) {
    const response = await apiClient.post("/auth/local/register", { username, email, password });
    return response.data;
}