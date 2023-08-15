import { post } from "@/lib/types"
import { randomUUID } from "crypto"

// Generate array of post mock data
const posts: post[] = [
  {
  id: randomUUID(),
  title: "Hello World",
  content: "This is my first post",
  createdAt: new Date().toString(),
  imagens: ["","",""],
  ranking: 5,
  rankingCuantity: 12,
  author: {
    name: "John Doe",
    age: 20,
    }
  }
]


export default function Home() {

  return (
    <section>
      {posts.map((post) => {
        return (
          
          <article key={post.id}>
            <div>
              <p>{post.imagens}</p>
            </div>
            {/* <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link> */}
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
            <p>{post.author.name}</p>

            {/* <span>{post.ranking}</span>
            <span>{post.rankingCuantity}</span> */}
            
            
          </article>
        )
      })}
    </section>
  )
}
