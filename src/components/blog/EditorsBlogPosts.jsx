'use client';
import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogTitle } from '@headlessui/react';
import { fetchBlogs } from '@/lib/actions/dashboard/dashboard';
import { CalendarDays, Tags, Sparkles, Pen, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { stripHtml } from '../utilities/stripHtml';
import { useDebouncedCallback } from '@/lib/actions/debounce';
import { useRouter } from 'next/navigation';
import { deleteBlogPost, updateBlogPost } from '@/lib/actions/others/blogActions';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function EditorsBlogPosts({ user = null }) {
    const { quill, quillRef } = useQuill();
    const [blogs, setBlogs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const hasFetched = useRef(false);
    const router = useRouter();


    const openEditModal = (post) => {
        setEditData(post);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setEditData(null);
    }
    const openDeleteModal = (blog) => {
        setDeleteTarget(blog);
        setIsDeleteModalOpen(true);
    }
    const closeDeleteModal = () => {
        setDeleteTarget(null);
        setIsDeleteModalOpen(false);
    }
    useEffect(() => {
        if (!hasFetched.current)
        {
            getBlogs();
            hasFetched.current = true;
        }
    }, []);
    useEffect(() => {
        if (quill && editData?.content)
        {
            quill.clipboard.dangerouslyPasteHTML(editData.content);
        }
    }, [quill, editData?.content]);

    const getBlogs = async () => {
        try
        {
            const res = await fetchBlogs();
            setBlogs(res.blogposts || []);
        } catch (error)
        {
            console.error('Failed to fetch blogs:', error);
        }
    };
    const handleViewPost = useDebouncedCallback((id) => {
        router.push(`/blog/${id}`);
    }, 500);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try
        {
            // console.log('editedData:', editData)
            const payload = {
                title: editData.title,
                content: editData.content || '',
                tags: typeof editData.tags === 'string'
                    ? editData.tags.split(',').map(t => t.trim())
                    : editData.tags,
                category: typeof editData.category === 'string'
                    ? editData.category.split(',').map(c => c.trim())
                    : editData.category
            };


            const updatedPost = await updateBlogPost(editData._id, payload);

            if (updatedPost)
            {
                setBlogs((prev) =>
                    prev.map((b) => (b._id === updatedPost._id ? updatedPost : b))
                );
                closeModal();
            } else
            {
                console.error('Update failed: No data returned');
            }
        } catch (err)
        {
            console.error('Error updating blog:', err);
        }
    };
    const handleDelete = async (id) => {
        if (!deleteTarget?._id) return;

        try
        {
            await deleteBlogPost({ ids: [deleteTarget._id] });
            setBlogs((prev) => prev.filter((b) => b._id !== deleteTarget._id));
            closeDeleteModal();
        } catch (err)
        {
            console.error('Failed to delete blog:', err);
            alert('Failed to delete blog post.');
        }
    };




    return (
        <div className="min-h-screen bg-gray-50 font-serif">
            <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#004e89]">Editor's Blog Posts</h1>
                {/* <UserLogout user={user} /> */}
            </header>

            <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {blogs.length === 0 ? (
                    <p className="text-center text-gray-500 col-span-full">No blog posts yet.</p>
                ) : (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow hover:shadow-md transition-all border border-gray-100 overflow-hidden flex flex-col"
                        >
                            {blog.imageUrl && (
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-xl font-semibold text-[#1d3c6a] mb-2 line-clamp-2">{blog.title}</h2>

                                <div className="text-sm text-gray-500 mb-3 space-y-1 flex items-center gap-x-4 flex-wrap">
                                    <div className="flex items-center gap-1">
                                        <CalendarDays className="w-4 h-4" /><span className='pt-1'>
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <Tags className="w-4 h-4" /> <span className='text-sm'>
                                            {blog.category.join(', ')}

                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                    {stripHtml(blog.content).substring(0, 150)}...
                                </p>
                                <div className='flex justify-between'>

                                    <button onClick={() => handleViewPost(blog._id)} className="mt-auto inline-block text-[#004e89] font-medium hover:underline"
                                    >
                                        View full post →
                                    </button>
                                    <div className='flex gap-2 text-[#004e89] cursor-pointer'>
                                        <span onClick={() => openEditModal(blog)}><Pen /></span>
                                        <span onClick={() => openDeleteModal(blog)}><Trash2 /></span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </main>


            {

                isModalOpen && (
                    <Dialog open={isModalOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />

                        <div className="relative bg-white p-6 w-full max-w-xl mx-auto rounded shadow-lg z-50">
                            <DialogTitle className="text-xl font-semibold mb-4">Edit Blog Post</DialogTitle>
                            <form onSubmit={handleUpdate}>
                                <input
                                    type="text"
                                    className="w-full mb-3 p-2 border rounded"
                                    value={editData.title}
                                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    className="w-full mb-3 p-2 border rounded"
                                    value={editData.tags}
                                    onChange={(e) => setEditData({ ...editData, tags: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    className="w-full mb-3 p-2 border rounded"
                                    value={Array.isArray(editData.category) ? editData.category.join(', ') : editData.category || ''}
                                    onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                                    required
                                />
                                {
                                    // <div ref={quillRef} className="h-40 mb-3" >
                                    <textarea
                                        value={stripHtml(editData.content)}
                                        onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                                        className='w-full min-h-[350px]'
                                    />


                                }

                                <div className="flex justify-end gap-2">
                                    <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-200 rounded">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Dialog>
                )
            }

            <Dialog open={isDeleteModalOpen} onClose={closeDeleteModal} className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
                <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded shadow-lg z-50">
                    <DialogTitle className="text-lg font-semibold mb-3">Delete Blog Post</DialogTitle>
                    <p className="text-gray-700 mb-5">
                        Are you sure you want to delete <strong>{deleteTarget?.title}</strong>? This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-2">
                        <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                        <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

