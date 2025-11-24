export default function DescriptionList(props) {

    return (
       props.descriptions.map((item, index) => {
            // console.log({ index }, { item })
            return (
                <li key={index}>{item}</li>
            )
        }))


}