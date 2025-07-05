import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";

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
    } catch (error)
    {
        console.log('error fetching users stats', error.message);
    }
}

export const deleteData = async (id, uriString) => {
    try
    {
        // console.log('delete uri:', uriString);
        const ids = [id];
        await api.delete(`/${uriString}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                ids,
            }
        })
    } catch (error)
    {
        console.log('Error Deleting Data', error.message)
        throw new Error('Error:', error)

    }
}


export const fetchJobs = async () => {
    try
    {
        const response = await api.get('/jobs');
        // console.log('job fetch api', response.data);
        if (response.status === 200)
        {
            return response.data;
        }
        return null

    } catch (error)
    {
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error.')
        } else
        {
            throw new Error("Failed to fetch jobs", error);
        }
    }
}

export const fetchJobById = async (jobId) => {
    try
    {
        const response = await api.get(`/jobs/${jobId}`);
        if (!response || !response.data)
        {
            console.warn('unformatted respnse:', response.data);
            return null;
        }
        return response.data;

    } catch (error)
    {
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error.')
        } else
        {
            throw new Error("Failed to fetch job", error);
        }
    }
}

export const updateJob = async (jobData) => {
    try
    {
        const { _id, ...updatedFields } = jobData;
        const response = await api.put(`/jobs/updateJob/${_id}`, updatedFields);
        console.log('job update response:', response);
        return response.data;
    } catch (error)
    {
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error.');
        } else
        {
            console.error('Update job error:', error);
            throw new Error('Failed to update job');
        }
    }
};


export const Logout = async () => {
    try
    {
        const response = await api.post('/auth/signout', {}, { withCredentials: true });
        return response;

    } catch (error)
    {
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error.');
        } else
        {
            console.error('Update job error:', error);
            throw new Error('Failed to update job');
        }

    }
}

export const fetchBlogs = async (limit = 10, page = 1) => {
    try
    {
        const response = await api.get(`/blog?limit=${limit}&page=${page}`);
        // console.log(response);
        return response.data;

    } catch (error)
    {
        if (error?.isAxiosError || error?.code === 'ERR_NETWORK')
        {
            throw new Error('Connection error.');
        } else
        {
            console.error('Fetch blogs error:', error);
            throw new Error('Failed to fetch blogs.');
        }
    }
}