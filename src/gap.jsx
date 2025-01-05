export default function Gap(props) {
    const breaks = [];
    for(let i=0; i<props.gap; i++) {
        breaks.push(<br key={i} />);
    }
    return (
        <>
            {breaks}
        </>
    );
}