import { DefaultTags } from "@/components/DefaultTags"
import { getPost } from "./page"

//cambiar url despues de subir
//tambien en getSearch y /posts/[id](page)

export default async function Head({ params }){
    const post = await getPost(params.id)

    return(
        <>
            <DefaultTags />
            <title>
                {post.title}
            </title>
            <meta name="description" content={post.description} />
            <meta name="keywords" content={post.keywords} />
            
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_LOCALURL}posts/${post.id}`} />            
            
            <meta property="og:title" content={post.title} />
            <meta property="og:image" content={post.image.sizes.tablet.url} />
            <meta property="og:description" content={post.description} />

            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.description} />
            <meta name="twitter:image" content={post.image.sizes.tableturl}/>
            <meta name="twitter:image:alt" content={post.image.alt} />
        </>
    )
}