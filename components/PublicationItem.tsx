import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-500">
                [{index}] <b><i>{publication.title}</i></b><br/>
                {publication.author}<br/>
                <a className = "text-sm">{publication.conference}, {publication.year}</a>
            </p>
            <p className = "text-gray-500 flex justify-end text-sm bold">
                {publication.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}                
            </p>
            
        </div>

    );
};

export default PublicationItem;
