const BlogList = ({blogs}) => {
    return ( 
        <div className="flex flex-col">
            {blogs.map((blog) => (
                <div className="flex flex-col">
                    <div className="card" key={blog.id}>
                        {blog.title}/{blog.author}/{blog.date}
                    </div>
                </div>
                
                )
            )
            }
        </div>
     );
}
 
export default BlogList;