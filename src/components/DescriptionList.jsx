export default function DescriptionList(props) {

    return (
       props.desriptions.map((item, index) => {
            console.log({ index }, { item })
            return (
                <li key={index}>{item}</li>
            )
        }))


}