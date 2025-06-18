import { api } from "@/lib/axios";

export const fetchApplicantsFromAPI = async (endpoint) => {
    try
    {
        const response = await api.get(`/${endpoint}`);
        if (response.status === 200)
        {
            return response.data;
        }
        return null;
    } catch (error)
    {
        // console.error("Error fetching applicants:", error);
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error, please check your network connection')
        } else
        {
            throw new Error("Failed to fetch applicants", error);
        }
    }
};

