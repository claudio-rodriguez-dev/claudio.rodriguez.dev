import {Fragment} from "react";


function ColoredText({text}) {
    return <div className="flex">
        <h2>[</h2>
        {text.map((line, i) =>
            <Fragment key={i}>
                {i > 0 && <h2 className="mr-2">,</h2>}
                <a href={line.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-primary">{line.text}</h2>
                </a>
            </Fragment>
        )}
        <h2>]</h2>
    </div>
}

export default function Technology({title, text}){
    return (
        <div className="space-y-3">
            <h2 className="text-2xl">{title}</h2>
            <ColoredText text={text}/>
        </div>
    )
}