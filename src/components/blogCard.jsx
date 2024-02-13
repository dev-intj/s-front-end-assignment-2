import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, loading = false }) => {
  const navigate = useNavigate();

  const onClickRedirect = () => {
    if (!loading) {
      navigate(`/blogs/${blog.id}`);
    }
  };

  return (
    <div className="col-2" style={{ height: "15vh" }}>
      <div className="card h-100 blogCard" onClick={onClickRedirect}>
        <div className="card-body">
          {!loading && (
            <h5 className="card-title overflow-hidden">{blog?.title}</h5>
          )}
          {loading && (
            <div className="d-flex justify-content-center h-100 w-100 overflow-hidden">
              <div className="spinner-border m-auto" role="status"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
