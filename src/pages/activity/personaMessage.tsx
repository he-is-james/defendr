interface Props {
    name: string,
    pronouns: string,
    background: string,
    properties: string[],
    bond: number,
    prompts: string[],
    responses: string[]
}

export default function PersonaMessage({
    name, pronouns, background, properties, bond, prompts, responses
}: Props) {
    return(
        <div>
            <div>
                <div>{name}</div>
                <div>{pronouns}</div>
                <div>
                    TODO: press here later for instructions, new component
                </div>
            </div>
            <div>
                <div>How you know them</div>
                <div>{background}</div>
            </div>
            <div>
                <div>
                    <div>Age: {properties[0]}</div>
                    <div>Height: {properties[1]}</div>
                    <div>Occupation: {properties[2]}</div>
                    <div>Location: {properties[3]}</div>
                </div>
                <div>
                    TODO: hardcode image url here
                </div>
            </div>
            <div>
                <div>Bond: {bond}</div>
                <div>
                    <div>{prompts[0]}</div>
                    <div>{responses[0]}</div>
                </div>
            </div>
            <div>
                <div>{prompts[1]}</div>
                <div>{responses[1]}</div>
            </div>
        </div>
    )
}