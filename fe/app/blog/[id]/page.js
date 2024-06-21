import { notFound } from 'next/navigation';
import Link from 'next/link';


export default async function BlogPage({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:8000/api/blog/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    notFound();
  }

  const blog = await res.json();

  return (
    <>
      <br/>
      <div className='row g-3 d-flex justify-content-center mb-4'>
        <div className="col-auto">
          <Link href={'/'} type="button" class="btn btn-outline-secondary">Back</Link>       
        </div>
      </div>
      
      <div className='d-flex justify-content-center mb-4'>
        <div key={blog.id} className="card w-50" >
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p>Author: {blog.user.name}</p>
            <p>Created At: {blog.createdAt}</p>
            <p className="card-text">{blog.blog}</p>
          </div>
        </div>
      </div>
    </>
  );
}
