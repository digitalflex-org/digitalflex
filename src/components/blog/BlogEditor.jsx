// pages/editor.tsx

"use client";
import { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { api } from '@/lib/axios';

export default function BlogEditor() {
    const { quill, quillRef } = useQuill({
        theme: 'snow',
        modules: {
            toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean']
            ]
        }
    });

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        tags: '',
        slug: '',
        featured: false,
        imageUrl: '',
        content: ''
    });

    useEffect(() => {
        if (quill)
        {
            quill.on('text-change', () => {
                setFormData((prev) => ({
                    ...prev,
                    content: quill.root.innerHTML
                }));
            });
        }
    }, [quill]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        const blogPayload = {
            ...formData,
            tags: formData.tags.split(',').map((tag) => tag.trim()),
            category: formData.category.split(',').map((cat) => cat.trim())
        };
        const res = await api.post('/blog/add-blog', blogPayload);

        if (res.ok)
        {
            alert('Blog posted!');
        } else
        {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Post a Blog</h1>

            <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                name="slug"
                placeholder="Slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                name="category"
                placeholder="Category (comma-separated)"
                value={formData.category}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                name="tags"
                placeholder="Tags (comma-separated)"
                value={formData.tags}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <input
                name="imageUrl"
                placeholder="Image URL (optional)"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded"
            />

            <label className="block mb-3">
                <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                /> Featured?
            </label>

            <div className="mb-6" ref={quillRef} style={{ height: 300 }} />

            <button
                onClick={handleSubmit}
                className="my-4 px-6 py-2 bg-[#004e89] text-white rounded"
            >
                Post Blog
            </button>
        </div>
    );
}
