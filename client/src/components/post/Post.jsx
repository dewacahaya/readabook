import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" 
      />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Horror</span>
            <span className="postCat">Comedy</span>
          </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing</span>
            <hr />
            <span className="postDate">Sunday</span>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, labore. Accusantium porro cum eius optio delectus in illo at corporis dignissimos, harum doloribus iste nesciunt obcaecati libero molestias velit nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, labore. Accusantium porro cum eius optio delectus in illo at corporis dignissimos, harum doloribus iste nesciunt obcaecati libero molestias velit nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, labore. Accusantium porro cum eius optio delectus in illo at corporis dignissimos, harum doloribus iste nesciunt obcaecati libero molestias velit nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, labore. Accusantium porro cum eius optio delectus in illo at corporis dignissimos, harum doloribus iste nesciunt obcaecati libero molestias velit nulla.</p>
          </div>
        </div>
  )
}
