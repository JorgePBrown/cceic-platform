import { useState } from "react"
import Module from "./Module"


export default function ModulePicker({mode, modules, setMode}) {

    const [module, setModule] = useState(undefined)

    function next() {
        if (module === modules.length - 1) setModule(0)
        else setModule(module + 1)
    }

    function prev() {
        if (module === 0) setModule(modules.length - 1)
        else setModule(module - 1)
    }

    let content
    if (module === undefined) {
        content = (
            <div className="list">
                {modules.map((mod, index) => {
                    return (
                        <li className="item" key={index}>
                            <button className="item" key={index} onClick={() => setModule(index)}>
                                {mod.title}
                            </button>
                        </li>
                        
                    )
                })}
            </div>
        )
    } else if (mode === "practice & return") {
        content = (
            <Module mode={"practice"} module={modules[module]} setMode={setMode} nextCallback={() => {next(); setMode("learn")}}/>
        )
    } else {
        content = (
            <Module mode={mode} module={modules[module]} setMode={setMode} nextCallback={next}/>
        )
    }

    return (
        <div className="picker">
            <div className="selector" hidden={module === undefined}>
                <button onClick={prev}>
                    Previous
                </button>

                <button onClick={() => setModule(undefined)}>
                    Select
                </button>

                <button onClick={next}>
                    Next
                </button>
            </div>
            {content}
        </div>
    )
}