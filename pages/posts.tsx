import {NextPage} from "next";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import {Posts} from "../model/Posts";

const PostsPage: NextPage<{allPostsData: Posts[]}> = ({allPostsData}) => {
    return (
        <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                    </Link>
                    <br />
                    <small>
                    </small>
                </li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const allPostsData: Posts[] = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default PostsPage