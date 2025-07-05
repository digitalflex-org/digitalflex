import { api } from "@/lib/axios";

export const updateBlogPost = async (id, data) => {
    if (!data) return;
    try
    {
        const response = await api.put(`/blog/update-blog/${id}`, data);
        return response.data;
    } catch (error)
    {
        console.log('Error Updating blog post', error);
        throw new Error('Unable to update selected blog post');

    }
}

export const deleteBlogPost = async ({ ids }) => {
    if (!ids || !Array.isArray(ids))
    {
        throw new Error('Missing or invalid parameter(s) (must be an array)');
    }

    try
    {
        const response = await api.delete('/blog/blog', {
            data: { ids }
        });

        return response.data;
    } catch (error)
    {
        console.error('Error deleting blog post:', error?.response?.data || error.message);
        throw new Error(error?.response?.data?.message || 'Unable to delete selected blog post');
    }
};