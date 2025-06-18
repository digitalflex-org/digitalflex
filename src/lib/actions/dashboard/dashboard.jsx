import { api } from "@/lib/axios";

export const fetchActiveUsers = async () => {
    try
    {
        const response = await api.get('/users/active-users');
        if (!response || !response.data || !Array.isArray(response.data.data))
        {
            console.warn('unexpected response format:', response.data);
            return [];
        }
        return response.data.data.map(user => {
            return {
                name: user.name || 'Unknown User',
                preferred_name: user.preferred_name || 'Unknown',
            }
        })
     } catch (error)
    {
        console.error('Error fetching active users:', error.message);
        return [];
    }
}

export const fetchApplicantById = async (applicantId) => {
    try
    {
        const response = await api.get(`/applicants/${applicantId}`);
        if (!response || !response.data)
        {
            console.warn('unformatted respnse:', response.data);
            return null;
        }
        return response.data;
        
    } catch (error)
    {
        console.error('error fetching selected user:', error.message)
        return null;
    }
}

export const getUserStatistics = async () => {
    try
    {
        const userApplicantStats = await api.get('/public/users-stats');
        return userApplicantStats;        
    } catch (error) {
        console.log('error fetching users stats', error.message);
    }
}

export const deleteData = async (id, uriString) => {
    try
    {
        const dataToDelete = [id];
        const deleteData = await api.delete(`/${uriString}`, {
            headers: {
                'Content-Type':'application/json',
            },
            data: {
                dataToDelete,
            }
        })
    } catch (error)
    {
        console.log('Error Deleting Data', error.message)
        throw new Error('Error:', error)
        
    }
}