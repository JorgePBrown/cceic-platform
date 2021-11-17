export default function LearningModule({info, practice}) {
    return (
        <div>
            <div className="info">
                {info.map((i, index) => {
                    if (i.type === "text") return <p className="text" key={index}>{i.text}</p>
                    if (i.type === "video/youtube") return (
                        <iframe className="video" key={index} width="560" height="315" src={i.link} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    )
                    if(i.type === "text/list") return (
                        <ul className="list" key={index}>
                            {i.items.map((i2, index2) => 
                                <li key={index2}>
                                    {i2}
                                </li>
                            )}
                        </ul>
                    )
                    return undefined
                })}
            </div>
            <button onClick={practice}>Practice it!</button>
        </div>
        
    )
}