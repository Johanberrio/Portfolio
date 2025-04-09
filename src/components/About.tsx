import DOMPurify from "dompurify";



export function About({content}: {content: any} ){

    const safeAbout = DOMPurify.sanitize(content.about);

    return (
        <>
            
                <h1 className="lg:text-3xl text-white font-bold pt-10 pb-10" style={{ fontFamily: "Noto Sans, sans-serif" }}>{content.about_title}</h1>

                <p className="text-white max-w-lg" style={{ fontFamily: "Noto Sans, sans-serif" }} dangerouslySetInnerHTML={{ __html: safeAbout }}></p>
            
        </>
    )
}